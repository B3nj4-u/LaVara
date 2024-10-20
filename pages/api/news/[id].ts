import { NextApiRequest, NextApiResponse } from 'next';
import { updateNews, deleteNews } from '@/lib/db';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { id } = req.query;

  if (req.method === 'PUT') {
    const { title, content } = req.body;
    await updateNews(Number(id), title, content);
    res.status(200).json({ message: 'News updated successfully' });
  } else if (req.method === 'DELETE') {
    await deleteNews(Number(id));
    res.status(200).json({ message: 'News deleted successfully' });
  } else {
    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}