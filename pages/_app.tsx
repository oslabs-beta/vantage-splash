import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "./Components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <div className='parentContainer'>
        <Component {...pageProps} styles />
      </div>
    </>
  );
}

export default MyApp;
