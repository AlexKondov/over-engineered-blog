/* eslint no-unused-expressions: off */
import React, { ReactElement } from 'react';
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
} from 'next/document';
import { ServerStyleSheet, injectGlobal } from 'styled-components';

injectGlobal`
	:root {
		--orange: #f47555;
		--black: #272727;
		--grey: #fafafa;
	}
	html, body, #__next, #__next > div {
		height: 100%;
	}
	body {
		margin: 0;
		background-color: var(--grey);
  }
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: var(--orange);

    position: fixed;
    z-index: 99999991031;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }
  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px var(--orange), 0 0 5px var(--orange);
    opacity: 1.0;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }
`;

type Props = {
  styleTags: ReactElement<{}>[];
};

export default class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags }; // return styles collected
  }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }

  render() {
    return (
      <html lang="bg">
        <Head>
          <link rel="manifest" href="static/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather:100,300,500,700|Montserrat:100,300,400,500,700&amp;subset=cyrillic"
            rel="stylesheet"
          />
          <title> The Savage Mind </title> {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
