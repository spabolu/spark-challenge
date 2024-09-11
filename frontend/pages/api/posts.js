// pages/api/posts.js
// import excuteQuery from '../lib/db';
import excuteQuery from '@/lib/db';

export default async function handler(req, res) {
  console.log('in the posts api');
  if (req.method === 'GET') {
    console.log('request was GET');
    try {
      const results = await excuteQuery({
        query: 'SELECT * FROM feedback',
      });
      res.status(200).json(results);
      console.log(results);
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Error retrieving feedback' });
    }
  } else {
    res.status(500).json({ error: 'Error retrieving feedback' });
    res2.status(405).json({ error: 'Method not allowed' });
  }
}