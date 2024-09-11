// pages/api/submit-feedback.js
import excuteQuery from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { feedback } = req.body;

    if (!feedback) {
      return res.status(400).json({ error: 'Feedback is required' });
    }

    try {
      // Insert 'anonymous' as the username and the feedback message into the table
      const { username, feedback } = req.body;
      console.log(req.body);
      console.log(feedback);
      //   console.log(req);
      const results = await excuteQuery({
        query: 'INSERT INTO feedback (username, feedback) VALUES (?, ?)',
        values: [username, feedback],
      });
      res.status(200).json(results);
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Error inserting feedback' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
