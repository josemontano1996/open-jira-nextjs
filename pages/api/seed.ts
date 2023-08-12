import { db } from '@/database';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  msg: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({ msg: 'You have no access to this servide' });
  }

  await db.connect();

  await db.disconnect();

  res.status(200).json({ msg: 'Success' });
}
