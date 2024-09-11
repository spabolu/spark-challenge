import excuteQuery from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = req.body; // Assume you are sending the solution ID in the request body
    try {
      await excuteQuery({
        query: 'UPDATE solutions SET upvote = upvote + 1 WHERE id = ?',
        values: [id],
      });
      res.status(200).json({ message: 'Upvote updated' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating upvote' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
