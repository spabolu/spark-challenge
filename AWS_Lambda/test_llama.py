import json
import boto3

# Initialize the SageMaker runtime client
client = boto3.client('sagemaker-runtime')

def lambda_handler(event, context):
    # HARDCODED user input
    payload = {
        "inputs": "<|begin_of_text|><|start_header_id|>user<|end_header_id|>\n\nwhat is the recipe of mayonnaise?<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
        "parameters": {
            "max_new_tokens": 256,
            "top_p": 0.9,
            "temperature": 0.6
        }
    }

    try:
        # Serialize the payload to JSON
        payload_json = json.dumps(payload)
        
        # Invoke the SageMaker endpoint
        response = client.invoke_endpoint(
            EndpointName='jumpstart-dft-llama-3-1-8b-instruct',
            ContentType='application/json',
            Body=payload_json.encode('utf-8')
        )
        
        # Read and decode the response
        result = json.loads(response['Body'].read().decode('utf-8'))
        
        # Return the result
        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': 'Model is working',
                'response': result
            }),
            'headers': {'Content-Type': 'application/json'}
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({
                'message': 'Error occurred',
                'error': str(e)
            }),
            'headers': {'Content-Type': 'application/json'}
        }
