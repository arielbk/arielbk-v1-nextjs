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
    text-decoration: none;

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