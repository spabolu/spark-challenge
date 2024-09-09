import subprocess

# Upgrade the sagemaker package
subprocess.check_call(["pip", "install", "--upgrade", "sagemaker"])

from sagemaker.predictor import retrieve_default
endpoint_name = "jumpstart-dft-llama-3-1-8b-instruct"
predictor = retrieve_default(endpoint_name)

payload = {
    "inputs": "<|begin_of_text|><|start_header_id|>user<|end_header_id|>\n\nwas the moon landing real?<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
    "parameters": {
        "max_new_tokens": 256,
        "top_p": 0.9,
        "temperature": 0.6
    }
}
response = predictor.predict(payload)
print(response)