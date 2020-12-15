import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import appReducer from "../src/store/reducers"

const logger = createLogger()
const store = createStore(appReducer, applyMiddleware(logger))


function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Sky Sports - Sports News, Transfers, Scores | Watch...</title>
        <link rel="icon" href="/skysport.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}> 
          <CssBaseline />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

store.subscribe(() => {
  console.log("Omo, the store don change sha 😲", store.getState())
})

export default MyApp;
