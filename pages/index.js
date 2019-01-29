import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import Infobar from '../components/Infobar/Infobar';
import Portfolio from '../components/Portfolio/Portfolio';
import GlobalStyle, { Content } from '../static/assets/globalStyles';
import variables from '../static/assets/variables';

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
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet" />

        <link rel="shortcut icon" href="static/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Infobar />
      <Portfolio />
    </Content>
  </ThemeProvider>
);
