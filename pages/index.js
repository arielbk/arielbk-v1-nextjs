import Head from 'next/head';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Infobar from '../components/Infobar';
import Portfolio from '../components/Portfolio';
import variables from '../components/variables';

const Content = styled.div`
  display: flex;

  @media ${props => props.theme.media.md} {
    display: block;
  }
`;

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    background: ${props => props.theme.colors.lightestgrey};
  }

  body {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    color: ${props => props.theme.colors.black};
    margin: 0;
    padding: 0;
    background: #333;
    background-image: linear-gradient(120deg, #333, #282828);
  }

  h3, h4 {
    color: ${props => props.theme.colors.medgrey};
  }

  p {
    margin: 0 0 .6rem 0;
    line-height: 1.75;
  }

  a {
    ${props => props.theme.transition('color')};
    color: ${props => props.theme.colors.brightblue};
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.lightblue};
    }
  }
`;

export default () => (
  <ThemeProvider theme={variables}>
    <Content>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129015227-1" />
        <script
          dangerouslySetInnerHTML={{ // eslint-disable-line
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date()); 

              gtag('config', 'UA-129015227-1');
              `,
          }}
        />

        <title>arielbk portfolio</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:200,400" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />

        <link rel="shortcut icon" href="static/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Infobar />
      <Portfolio />
    </Content>
  </ThemeProvider>
);
