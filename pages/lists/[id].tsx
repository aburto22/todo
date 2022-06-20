import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { setCurrentList } from '@slices/currentList';
import { useRouter } from 'next/router';
import * as styles from '@styles/home';
import CreateTodoForm from '@components/CreateTodoForm';
import TodoList from '@components/TodoList';

const List: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const listInfo = useAppSelector((state) => state.user.lists.find((list) => list.id === id));
  const dispatch = useAppDispatch();

  console.log(listInfo);

  useEffect(() => {
    if (listInfo) {
      dispatch(setCurrentList(listInfo));
    }
  }, [id, dispatch, listInfo]);

  return (
    <>
      <Head>
        <title>My list</title>
        <meta name="description" content="A powerful todo list for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <styles.Main>
        <styles.Section>
          <CreateTodoForm />
        </styles.Section>
        <styles.Section>
          <TodoList />
        </styles.Section>
      </styles.Main>
    </>
  );
};

export default List;
