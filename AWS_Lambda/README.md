# About AWS_Lambda
This directory contains the code we developed for lambda functions in AWS. The test_llama, test_db, and test_bart files are used for testing various operations performed in the main lambda function.

The main lambda function is triggered when a file gets uploaded to the relevant-articles bucket in S3. The function the extracts text from article using AWS textract. The extracted text is then passed into our deployed bart summarization model. We then insert a new article object into our database with the summary produced by our model and the article link in S3. The fronted then displays this information. 

### Configuration in AWS Lambda Console:
- Chose "create lambda function from scratch"
- Set a trigger to be any AWS S3 add file operation
- Authorize the lambda function's role to access Sagemaker models and textract
- Download the lambda_function directory from this repo as a zip file
- Upload to lamba dashboard