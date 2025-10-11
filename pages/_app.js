import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Cyanpy - Advanced AI-Powered Education Platform" />
        <title>Cyanpy - Next-Generation AI Education</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

