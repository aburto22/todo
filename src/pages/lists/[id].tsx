import { useEffect } from 'react';
import Pusher from 'pusher-js';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as styles from '@styles/home';
import CreateTodoForm from '@components/CreateTodoForm';
import Spinner from '@components/Spinner';
import { useList } from '@hooks/swr';
import TodoList from '@components/TodoList';

const List: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const listId = id?.toString() || '';
  const { list, error, mutate } = useList(listId);

  useEffect(() => {
    const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY || '';

    const pusher = new Pusher(pusherKey, {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('todo-mother');

    channel.bind('update', ({ listIdPusher }: { listIdPusher: string }) => {
      if (listIdPusher === listId) {
        mutate();
      }
    });

    return () => {
      pusher.unsubscribe('todo-mother');
    };
  }, [listId, mutate]);

  if (error) {
    console.error(error);
  }

  return (
    <>
      <Head>
        <title>My list</title>
        <meta name="description" content="A powerful todo list for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <styles.Main>
        {list ? (
          <>
            <styles.Title>{`List: ${list.name}`}</styles.Title>
            <styles.InfoContainer>
              <styles.Info>{`status: ${list.isFreezed ? 'freezed' : 'un-freezed'}`}</styles.Info>
            </styles.InfoContainer>
            <styles.Section>
              <CreateTodoForm listId={listId} />
            </styles.Section>
            <styles.Section>
              <TodoList listId={listId} />
            </styles.Section>
          </>
        ) : <Spinner size="normal" />}
      </styles.Main>
    </>
  );
};

export default List;
