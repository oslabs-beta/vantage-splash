import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "./Components/NavBar";
import { useViewportScroll } from "framer-motion";
import Image from "next/image";

function MyApp({ Component, pageProps }: AppProps) {
  const { scrollYProgress } = useViewportScroll();
  return (
    <>
      <NavBar scrollYProgress={scrollYProgress} />
      <div className='parentContainer'>
        <Component {...pageProps} styles />
      </div>
      <footer className = 'globalFooter'>
          <span>© Vantage 2022</span>
          {/* <Image
            className='logo'
            src='/favicon.png'
            alt='Vantage Logo'
            width={16}
            height={16}
          /> */}
      </footer>
    </>
  );
}

export default MyApp;
