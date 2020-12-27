
import React from 'react';
import App from 'next/app';
import {Provider} from 'react-redux';
import store from 'reduxjs';
import { createWrapper } from 'next-redux-wrapper';
import Head from 'next/head'

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }

    render() {
        //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const {Component, pageProps} = this.props;

        return (
          <React.Fragment>
            <Head>
              <title>Boiler React Starter</title>
            </Head>
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
          </React.Fragment>
        );
    }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
