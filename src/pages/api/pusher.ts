import { NextApiRequest, NextApiResponse } from 'next';
import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID || '',
  key: process.env.PUSHER_KEY || '',
  secret: process.env.PUSHER_SECRET || '',
  cluster: process.env.PUSHER_CLUSTER || '',
  useTLS: true,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { listId }: { listId: string } = req.body;
  await pusher.trigger('todo-mother', 'update', { listIdPusher: listId });

  res.status(200).end();
};

export default handler;
