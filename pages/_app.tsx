import React from 'react';
import App, { NextAppContext } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';

import Layout from '../components/Layout';
import AppHead from '../components/AppHead';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <AppHead />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
