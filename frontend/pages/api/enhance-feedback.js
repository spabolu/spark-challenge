import AWS from 'aws-sdk';

// Use AWS SDK without explicit credentials; Cloud9 manages this for you.
const sagemakerRuntime = new AWS.SageMakerRuntime({
  region: process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1' // Ensure the region is set
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // console.log("here is type" + typeof(req.body.feedback) + req.body.feedback);
    const { userInput } = req.body.feedback;
    
    const feedback = req.body.feedback || ''; // Access the feedback string
    console.log('Extracted Feedback:', feedback);


    try {
      
      // Define the prompt with an enhancement instruction
     // const prompt = `make this more professional: remove the fir "${feedback}"`;
      const prompt = `You are given feedback that needs to be rephrased in a more technical sense. Do not include the instruction in your response. Rephrase the following feedback: "${feedback}" Give me one response. Respond in this format: "Rephrased:"`;

      console.log(prompt);
      const params = {
        EndpointName: 'jumpstart-dft-llama-3-1-8b-instruct', // Replace with your SageMaker endpoint name
        ContentType: 'application/json',
        Body: JSON.stringify({ 
            inputs: prompt,
            max_tokens: 1 // Adjust this value based on your needs
          }) // Use the prompt with the instruction
      };
      
      

      const response = await sagemakerRuntime.invokeEndpoint(params).promise();

      const responseBody = JSON.parse(response.Body.toString('utf-8'));
      console.log('Raw AI Response:', responseBody); // Check the raw AI response
       const responseText = responseBody.generated_text || '';
      const delimiter = 'Rephrased:"';
      const startIndex = responseText.indexOf(delimiter) + delimiter.length;

      // If the delimiter is found, extract and trim the text after it
      const enhancedFeedback = startIndex > delimiter.length 
        ? responseText.substring(startIndex).trim() 
        : responseText.trim();

      res.status(200).json({ enhancedFeedback });

      console.log(responseBody);


      res.status(200).json({ enhancedFeedback: responseBody.generated_text });
    } catch (error) {
      console.error('Error invoking SageMaker endpoint:', error);
      res.status(500).json({ error: 'Failed to enhance feedback' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}