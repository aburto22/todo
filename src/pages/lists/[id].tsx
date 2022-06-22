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
  const { list, error } = useList(listId);

  if (error) {
    console.error(error);
  }

  if (!list) {
    return <Spinner size="normal" />;
  }

  return (
    <>
      <Head>
        <title>My list</title>
        <meta name="description" content="A powerful todo list for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <styles.Main>
        <styles.Title>{`List: ${list.name}`}</styles.Title>
        <styles.Section>
          <CreateTodoForm listId={listId} />
        </styles.Section>
        <styles.Section>
          <TodoList listId={listId} />
        </styles.Section>
      </styles.Main>
    </>
  );
};

export default List;
