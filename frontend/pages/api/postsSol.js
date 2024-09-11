// pages/api/postsSol.js
// import excuteQuery from '../lib/db';
import excuteQuery from '@/lib/db';

export default async function handler(req, res) {
  console.log('in the posts api');
  if (req.method === 'GET') {
    console.log('request was GET');
    try {
      const solResults = await excuteQuery({
        query: 'SELECT * FROM solutions',
      });
      res.status(200).json(solResults);
      console.log(solResults);
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Error retrieving feedback' });
    }
  } else {
    res.status(500).json({ error: 'Error retrieving feedback' });
  }
}
