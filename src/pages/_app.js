import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import store from 'reduxjs';
import { createWrapper } from 'next-redux-wrapper';
import Head from 'next/head';
import DefaultLayout from 'layout/Default';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    // Anything returned here can be accessed by the client
    return { pageProps };
  }

  render() {
    // pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <>
        <Head>
          <title>Boiler React Starter</title>
        </Head>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </>
    );
  }
}

// makeStore function that returns a new store for every request
const makeStore = () => store;

// withRedux wrapper that passes the store to the App Component
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
