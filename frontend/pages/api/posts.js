// pages/api/posts.js
// import excuteQuery from '../lib/db';
import excuteQuery from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const results = await excuteQuery('SELECT * FROM feedback');
      res.status(200).json(results);
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Error retrieving feedback' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// export default async (req, res) => {
//   try {
//     console.log('req nom', req.body);
//     const result = await excuteQuery({
//       query: 'INSERT INTO post(content) VALUES(?)',
//       values: [req.body.content],
//     });
//     console.log('ttt', result);
//   } catch (error) {
//     console.log(error);
//   }
// };
