import type { NextPage } from 'next';
import Head from 'next/head';
import * as styles from '@styles/home';
import CreateTodoForm from '@components/CreateTodoForm';
import TodoList from '@components/TodoList';

const List: NextPage = () => (
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

export default List;
