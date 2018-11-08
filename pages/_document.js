import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // create an instance of serverstylesheet
    const sheet = new ServerStyleSheet();

    // retrieve styles from components in the page
    const page = renderPage(
      App => props => sheet.collectStyles(<App {...props} />),
    );

    // extract the style as <style> tags
    const styleTags = sheet.getStyleElement();

    // pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {/* Output styles in the head */}
          { this.props.styleTags }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
