// pages/api/postsSol.js
// import excuteQuery from '../lib/db';
import excuteQuery from '@/lib/db';

export default async function handler(req, res) {

  if (req.method === 'GET') {
    try {
      const articleResults = await excuteQuery({
        query: 'SELECT * FROM ARTICLE',
      });
      res.status(200).json(articleResults);

    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Error retrieving feedback' });
    }
  } else {
    res.status(500).json({ error: 'Error retrieving feedback' });
  }
}
