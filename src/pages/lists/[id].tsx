import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as styles from '@styles/home';
import CreateTodoForm from '@components/CreateTodoForm';
import { useList } from '@hooks/swr';
import TodoList from '@components/TodoList';

const List: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const listId = id?.toString() || '';
  const { list, mutate } = useList(listId);

  return (
    <>
      <Head>
        <title>My list</title>
        <meta name="description" content="A powerful todo list for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <styles.Main>
        <styles.Section>
          <CreateTodoForm listId={listId} mutate={mutate} />
        </styles.Section>
        <styles.Section>
          {list && <TodoList list={list} mutate={mutate} />}
        </styles.Section>
      </styles.Main>
    </>
  );
};

export default List;
