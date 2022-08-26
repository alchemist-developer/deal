/* eslint-disable prettier/prettier */
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global-styles";
import "../../src/styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

MyApp.propTypes = AppProps;
