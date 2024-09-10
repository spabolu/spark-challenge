import mysql.connector
from mysql.connector import Error
from sagemaker.predictor import retrieve_default
import re


# Database connection info
db_host = "db-social.cd4wcwmu0tot.us-east-1.rds.amazonaws.com"
db_user = "admin"
db_password = "sparkycoders"
db_name = "socialdb"

try:
    # Connect to the AWS RDS MySQL database
    conn = mysql.connector.connect(
        host=db_host,
        database=db_name,
        user=db_user,
        password=db_password,
        connect_timeout=10  # Set a timeout of 10 seconds
    )

    if conn.is_connected():
        print("Connection to the database was successful!")  # Connection is successful if this prints

        cursor = conn.cursor()

        # Fetch all feedback from the feedback table
        cursor.execute("SELECT feedback FROM feedback;")
        feedback_data = cursor.fetchall()  # Returns a list of tuples
        
        # Combine all feedback into a single text block
        all_feedback = " ".join([feedback[0] for feedback in feedback_data])  # Concatenate feedback text
        
        # USING LLM NOW
        # Define endpoint name for the LLaMA model
        endpoint_name = "jumpstart-dft-llama-3-1-8b-instruct"
        predictor = retrieve_default(endpoint_name)

        # Define the prompt payload to instruct the LLM to identify recurring problems
        payload = {
            #"inputs": f"<|begin_of_text|><|start_header_id|>user<|end_header_id|>\n\nAnalyze the following feedback from various people and identify recurring problems or concerns. Provide a summary of the main problems and suggest potential solutions. write the response in the following format: Problem 1: [problem] Solution 1: [solution] Problem 2: [problem] Solution 2: [solution]... provide one solution per problem. I want to insert this into a database so make the output clean. \n\n'{all_feedback}'<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
            #"inputs": f"<|begin_of_text|><|start_header_id|>user<|end_header_id|>\n\nAnalyze the following feedback from various people about mining activities and identify recurring problems or concerns. For each problem, provide a professional and technical summary with the following structure:\n\nProblemTheme: [A concise sentence summarizing the problem]\nProblem: [A 2-3 sentence explanation with technical details]\nSolutionTheme: [A concise sentence summarizing the solution]\nSolution: [A 2-3 sentence explanation of the proposed solution].\n\n'{all_feedback}'<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
            "inputs": f"<|begin_of_text|><|start_header_id|>user<|end_header_id|>\n\n Analyze the following feedback from various people and identify recurring problems or concerns. I want to insert your response into a database which has the columns: problem description, problem paragraph, solution description, solution paragraph. write the response of the main things identified in the following format: ProblemDescription: [problemdescription (1-2 sentences)] Problem: [problem (a paragraph)] SolutionDescription: [solutiondescription (1-2) sentences] Solution: [solution (4 sentences)]. The problem should be a general problem identified \n\n'{all_feedback}'<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
            "parameters": {
                "max_new_tokens": 4096,
                "top_p": 0.9,
                "temperature": 0.6
            }
        }

        # Generate response using the LLaMA model
        response = predictor.predict(payload)
        analysis = response['generated_text']
        
        # Print the analysis result
        print(analysis)
        
        
        ## PARSE AND ENTER IN DATABASE SOLUTIONS TABLE
        # Regular expressions to extract parts
        problem_description_pattern = r'\*\*ProblemDescription:\s*(.*?)\*\*'
        problem_pattern = r'Problem:\s*(.*?)(?:SolutionDescription:|$)'
        solution_description_pattern = r'SolutionDescription:\s*(.*?)(?:Solution:|$)'
        solution_pattern = r'Solution:\s*(.*?)(?:\*\*ProblemDescription|\Z)'
        
        # Find all matches
        problem_descriptions = re.findall(problem_description_pattern, analysis, re.DOTALL)
        problems = re.findall(problem_pattern, analysis, re.DOTALL)
        solution_descriptions = re.findall(solution_description_pattern, analysis, re.DOTALL)
        solutions = re.findall(solution_pattern, analysis, re.DOTALL)
                
        
        print(problem_descriptions)
        print(problems)
        print(solution_descriptions)
        print(solutions)
        
        data = list(zip(problem_descriptions, problems, solution_descriptions, solutions))

        
        insert_query = """
        INSERT INTO solutions (problempreview, problem, solutionpreview, solution) VALUES (%s, %s, %s, %s);
        """
    
        # Execute the insertion
        cursor.executemany(insert_query, data)
        conn.commit()
        print("Data inserted successfully!")
        
          # Close the cursor and the connection
        cursor.close()
        conn.close()
        print("Database connection closed successfully.")

except Error as e:
    print("Error: Could not connect to the database.")
    print(e)
