import "../styles/globals.css"
import Head from "next/head"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"

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
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
