import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>BChainDev</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/Ethereum.png" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;