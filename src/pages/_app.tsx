/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import GlobalStyle from '@styles/GlobalStyle';
import Layout from '@components/Layout';
import { UserProvider } from '@auth0/nextjs-auth0';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <GlobalStyle />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </UserProvider>
);

export default MyApp;
