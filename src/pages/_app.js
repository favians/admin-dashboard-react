import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import store from 'reduxjs';
import { createWrapper } from 'next-redux-wrapper';
import Head from 'next/head';
import DefaultLayout from 'layout/Default';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'resources/theme';
import 'resources/styles/global.css';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

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
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          </ThemeProvider>
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
