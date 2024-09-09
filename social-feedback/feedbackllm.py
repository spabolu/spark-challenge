import subprocess
import psycopg2  # For PostgreSQL. Use mysql-connector-python for MySQL.
from sagemaker.predictor import retrieve_default


# Define endpoint name for the LLaMA model
endpoint_name = "jumpstart-dft-llama-3-1-8b-instruct"
predictor = retrieve_default(endpoint_name)

# Define the prompt payload
payload = {
    "inputs": "<|begin_of_text|><|start_header_id|>user<|end_header_id|>\n\n Write feedback and concerns as if you are an anonymous indigenous person or a mining worker impacted by sustainability issues in arizona. Write around 2-3 sentences. <|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
    "parameters": {
        "max_new_tokens": 2048,
        "top_p": 0.9,
        "temperature": 0.6
    }
}


# Generate feedback using the LLaMA model
number_of_responses = 10  # Specify the number of responses you want to generate

responses = []
for _ in range(number_of_responses):
    # Generate feedback using the LLaMA model
    response = predictor.predict(payload)
    feedback_text = response['generated_text']
    print(feedback_text)  # Print each generated feedback
    responses.append(feedback_text)


# # Database connection details
# db_host = "db-social.cd4wcwmu0tot.us-east-1.rds.amazonaws.com"
# db_user = "admin"
# db_password = "sparkycoders"
# db_name = "socialdb"

# try:
#     # Connect to the AWS RDS PostgreSQL database
#     conn = psycopg2.connect(
#         host=db_host,
#         database=db_name,
#         user=db_user,
#         password=db_password
#     )

#     cursor = conn.cursor()

#     # Insert feedback into the 'feedback' table
#     insert_query = "INSERT INTO feedback (feedback) VALUES (%s);"
#     cursor.execute(insert_query, (feedback_text,))

#     # Commit the transaction
#     conn.commit()
#     print("Feedback inserted successfully!")

# except Exception as e:
#     print(f"Error inserting feedback: {e}")

# finally:
#     # Close the connection
#     if conn:
#         cursor.close()
#         conn.close()
