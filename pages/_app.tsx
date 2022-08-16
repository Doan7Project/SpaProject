import "../styles/globals.css";
import type { AppProps } from "next/app";
<<<<<<< HEAD
import NavBar from "./src/components/navbar";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar/>
=======

import HeaderConponent from "./src/components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    
      <HeaderConponent/>

>>>>>>> a69a633bdf96779b1e992981fd33d2d67e11b04f
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
