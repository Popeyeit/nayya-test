import '../styles/globals.css';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>NAYYA</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;