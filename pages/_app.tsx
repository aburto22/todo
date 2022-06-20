/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import GlobalStyle from '@styles/GlobalStyle';
import { Provider } from 'react-redux';
import store from '@store/.';
import Layout from '@components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  </Provider>
);

export default MyApp;
