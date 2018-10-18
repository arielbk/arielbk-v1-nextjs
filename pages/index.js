import Head from 'next/head';
import Infobar from '../components/Infobar';
import Portfolio from '../components/Portfolio';
import styled, { createGlobalStyle } from 'styled-components';

const Content = styled.div`
  display: flex;

  @media screen and (max-width: 840px) {
    display: block;
  }
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #333;
    --darkgrey: #4d4d5b;
    --medgrey: #8c8c9c;
    --lightgrey: #ccc;
    --lightestgrey: #edeeef;


    /* colours for different skill tabs - controlled from js */
    --skill--html: #ec6433;
    --skill--css: #3c9ad6;
    --skill--javascript: #f4d944;
    --skill--react: #71bfdb;
    --skill--sketch: #e59946;
    --skill--bootstrap: #50457b;
    --skill--sass: #b25786;
    --skill--jquery: #2e6daa;
    --skill--python: #223c55;
    --skill--flask: #ffffff;
  }

  /* general styles */

  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    background: var(--lightestgrey);
  }

  body {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    color: var(--black);
    margin: 0;
    padding: 0;
    background: #333;
  }

  h3, h4 {
    color: var(--medgrey);
  }

  p {
    margin: 0 0 .6rem 0;
    line-height: 1.75;
  }

  a {
    color: #A5A5FF;
  }
`;

export default () => (
  <Content>
    <Head>
      <title>arielbk portfolio</title>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <GlobalStyle />
    <Infobar />
    <Portfolio />
  </Content>
);