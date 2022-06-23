export const triggerPusher = async (listId: string): Promise<void> => {
  await fetch('/api/pusher', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ listId }),
  });
};
