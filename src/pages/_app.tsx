/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import GlobalStyle from '@styles/GlobalStyle';
import { Provider } from 'react-redux';
import store from '@store/.';
import Layout from '@components/Layout';
import { UserProvider } from '@auth0/nextjs-auth0';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <UserProvider>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  </Provider>
);

export default MyApp;
