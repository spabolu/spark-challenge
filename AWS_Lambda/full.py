import json
import boto3
import time
import pymysql

# Initialize S3 and Textract clients
s3_client = boto3.client('s3')
textract_client = boto3.client('textract')
sagemaker_client = boto3.client('sagemaker-runtime')

def extract_text(event):
    # Get bucket name and object key from the S3 event
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    object_key = event['Records'][0]['s3']['object']['key']
    
    # Trigger Textract to analyze the document
    response = textract_client.start_document_text_detection(
        DocumentLocation={
            'S3Object': {
                'Bucket': bucket_name,
                'Name': object_key
            }
        }
    )
    
    job_id = response['JobId']
    
    # Poll the job status until it finishes
    while True:
        job_status = textract_client.get_document_text_detection(JobId=job_id)
        status = job_status['JobStatus']
        
        if status == 'SUCCEEDED':
            break
        elif status == 'FAILED':
            raise Exception(f"Textract job {job_id} failed")
        
        time.sleep(5)
    
    # Now extract the detected text
    extracted_text = ""
    for block in job_status['Blocks']:
        if block['BlockType'] == 'LINE':
            extracted_text += block['Text']
    
    return extracted_text

def summarize(extracted_text):
    
    # Query Endpoint
    response = sagemaker_client.invoke_endpoint(
        EndpointName="jumpstart-dft-hf-summarization-bart-20240911-062415", 
        ContentType="application/x-text", 
        Body=extracted_text.encode('utf-8'))
    
    # Parse Response
    model_predictions = json.loads(response['Body'].read())
    summary_text = model_predictions['summary_text']
    
    return summary_text

def write_to_db(summary):
    # Establish database connection
    connection = pymysql.connect(
        host="db-social.cd4wcwmu0tot.us-east-1.rds.amazonaws.com",
        user="admin",
        password="sparkycoders",
        database="socialdb",
        cursorclass=pymysql.cursors.DictCursor
    )
    
    cursor = connection.cursor()
    
    # Get bucket name and object key from the S3 event
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    object_key = event['Records'][0]['s3']['object']['key']
    link = f"https://{bucket_name}.s3.amazonaws.com/{object_key}"

    # SQL query to insert values into the ARTICLE table
    insert_query = """
        INSERT INTO ARTICLE (Link, Summary)
        VALUES (%s, %s)
    """

    # Execute the query with the provided values
    cursor.execute(insert_query, (link, summary))
    
    # Commit and close
    connection.commit()
    connection.close()

def lambda_handler(event, context):

    extracted_text = extract_text(event)
    summary_text = summarize(extracted_text)
    write_to_db(summary_text)
    
    return {
        'statusCode': 200,
        'body': json.dumps('Operation Completed!')
    }
