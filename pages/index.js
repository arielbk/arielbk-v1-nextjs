import Head from 'next/head';
import Biobar from '../components/Infobar';
import Portfolio from '../components/Portfolio';

export default () => (
  <div className="content">
    <Head>
      <title>arielbk portfolio</title>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
      <link rel="stylesheet" href="static/styles.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Biobar />
    <Portfolio />

  </div>
)