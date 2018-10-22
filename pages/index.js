import Head from 'next/head';
import Infobar from '../components/Infobar';
import Portfolio from '../components/Portfolio';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { colors } from '../components/variables';

const Content = styled.div`
  display: flex;

  @media screen and (max-width: 840px) {
    display: block;
  }
`;

const GlobalStyle = createGlobalStyle`
  // :root {
  //   --black: #333;
  //   --darkgrey: #404d5b;
  //   --medgrey: #8C929C;
  //   --lightgrey: #ccc;
  //   --lightestgrey: #C9CDD0;


  //   /* colours for different skill tabs - controlled from js */
  //   --skill--html: #ec6433;
  //   --skill--css: #3c9ad6;
  //   --skill--javascript: #f4d944;
  //   --skill--react: #71bfdb;
  //   --skill--sketch: #e59946;
  //   --skill--bootstrap: #50457b;
  //   --skill--sass: #b25786;
  //   --skill--jquery: #2e6daa;
  //   --skill--python: #223c55;
  //   --skill--flask: #ffffff;
  // }

  /* general styles */

  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    background: ${props => props.theme.lightestgrey};
  }

  body {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    color: ${props => props.theme.black};
    margin: 0;
    padding: 0;
    background: #333;
    background-image: linear-gradient(120deg, #333, #282828);
  }

  h3, h4 {
    color: ${props => props.theme.medgrey};
  }

  p {
    margin: 0 0 .6rem 0;
    line-height: 1.75;
  }

  a {
    color: ${props => props.theme.brightblue};

    &:hover {
      color: ${props=> props.theme.lightblue};
    }
  }
`;

export default () => (
  <ThemeProvider theme={colors}>
  <Content>
    <Head>
      <title>arielbk portfolio</title>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:200,400" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <GlobalStyle />
    <Infobar colors={colors} />
    <Portfolio colors={colors} />
  </Content>
  </ThemeProvider>
);