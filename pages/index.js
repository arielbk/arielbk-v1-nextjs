import Head from 'next/head';
import Biobar from '../components/Biobar';

export default () => (
  <div>
    <Head>
      <title>My styled page!!</title>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
      <link rel="stylesheet" href="static/styles.css" />
    </Head>
    <Biobar />

  </div>
)