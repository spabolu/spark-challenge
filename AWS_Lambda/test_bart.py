import json
import boto3
import time
import pymysql

# Initialize S3 and Textract clients
s3_client = boto3.client('s3')
textract_client = boto3.client('textract')

def lambda_handler(event, context):
    
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
    
    # Get the Job ID
    job_id = response['JobId']
    
    print(f"Started Textract job with ID: {job_id}")
    
    # Poll the job status until it finishes
    while True:
        job_status = textract_client.get_document_text_detection(JobId=job_id)
        
        status = job_status['JobStatus']
        print(f"Job status: {status}")
        
        if status == 'SUCCEEDED':
            break
        elif status == 'FAILED':
            print(f"Job failed: {job_status}")
            raise Exception(f"Textract job {job_id} failed")
        
        # Wait for a few seconds before checking the status again
        time.sleep(5)
    
    # Now extract the detected text
    extracted_text = ""
    for block in job_status['Blocks']:
        if block['BlockType'] == 'LINE':
            extracted_text += block['Text']
    
    
    
    
    # Query Endpoint
    response = sagemaker_client.invoke_endpoint(
        EndpointName="jumpstart-dft-hf-summarization-bart-20240911-005435", 
        ContentType="application/x-text", 
        Body=extracted_text.encode('utf-8'))
    
    # Parse Response
    model_predictions = json.loads(response['Body'].read())
    summary_text = model_predictions['summary_text']
    
    
    # Print Result
    print(f"Summary: {summary_text}") 
    
    return {
        'statusCode': 200,
        'body': json.dumps('Operation Completed!')
    }

