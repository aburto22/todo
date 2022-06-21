import type { NextPage } from 'next';
import Head from 'next/head';
import * as styles from '@styles/home';
import CreateListForm from '@components/CreateListForm';
import AllLists from '@components/AllLists';

const Home: NextPage = () => (
  <>
    <Head>
      <title>More than a ToDo list</title>
      <meta name="description" content="A powerful todo list for all your needs" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <styles.Main>
      <styles.Section>
        <CreateListForm />
      </styles.Section>
      <styles.Section>
        <AllLists />
      </styles.Section>
    </styles.Main>
  </>
);

export default Home;
