import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
// import Theme from "../src/ui/Theme";
import createEmotionCache from "../src/createEmotionCache";
import Header from "../src/ui/Header";
import Footer from "../src/ui/Footer";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const arcBlue = `#0B72B9`;
const arcOrange = "#FFBA60";
const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tabsStyle: {
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
      fontFamily: "Raleway",
      color: "#fff",
      minWidth: 10,
      marginLeft: "25px",
    },
    estimate: {
      fontSize: "1rem",
      textTransform: "none",
      fontFamily: "pacifico",
      color: "white",
    },
    h1: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      fontWeight: 700,
      color: `${arcBlue}`,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "gray",
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "white",
    },
    h3: {
      fontFamily: "pacifico",
      fontSize: "2.5rem",
      color: arcBlue,
    },
    body1: {
      fontSize: "1.25rem",
      color: "grey",
      fontweight: 300,
    },
    caption: {
      fontSize: "1 rem",
      fontWeight: 300,
      color: "gray",
    },
    h6: {
      fontweight: 300,
      fontFamily: "Raleway",
      color: arcBlue,
      lineHeight: 1,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        // color: "grey",
        // fontSize: "1rem",
      },
    },
    MuiInput: {
      "&..css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
        // color: "grey",
        // fontSize: "1rem",
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:hover:not:($disabled):not($focused}:not($error):before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
      },
    },
  },
  learnButton: {
    marginRight: 40,
    borderWidth: 2,
    textTransform: "none",
    fontFamily: "Roboto",
    fontWeight: "bold",
    borderRadius: 50,
    backgroundColor: "#FFBA60",
    color: arcBlue,
    borderColor: arcBlue,
    // marginTop: "1em",
  },
});

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title> Arc Developement</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline /> */}
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
