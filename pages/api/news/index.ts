import { NextApiRequest, NextApiResponse } from 'next';
import { getNews, addNews } from '@/lib/db';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (req.method === 'GET') {
    const news = await getNews();
    res.status(200).json(news);
  } else if (req.method === 'POST') {
    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { title, content } = req.body;
    await addNews(title, content);
    res.status(201).json({ message: 'News added successfully' });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}