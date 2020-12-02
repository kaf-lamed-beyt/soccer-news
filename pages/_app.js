import "../styles/globals.css"
import Head from "next/head"
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Sky Sports - Sports News, Transfers, Scores | Watch...</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
