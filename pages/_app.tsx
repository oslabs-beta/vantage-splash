import "../styles/globals.scss";
import type { AppProps } from "next/app";
import NavBar from "../Components/NavBar";
import { useViewportScroll } from "framer-motion";
import Image from "next/image";
import { ThemeProvider, mergeTheme, defaultTheme } from "evergreen-ui";

function MyApp({ Component, pageProps }: AppProps) {
  const { scrollYProgress } = useViewportScroll();
  const theme = mergeTheme(defaultTheme, {
    components: {
      Button: {
        appearances: {
          purple: {
            color: 'white',
            paddingX: 16,
            paddingY: 8,
            borderRadius: 5,
            backgroundColor: '#7100f3',
            _hover: {
              backgroundColor: '#5500b6',
            },
            _active: {
              backgroundColor: '#3d0083',
            },
            _focus: {
              boxShadow: '0 0 0 2px lightcoral',
            },
          },
        },
      },
    },
  })
  return (
    <ThemeProvider value={theme}>
      <NavBar scrollYProgress={scrollYProgress} />
      <div className='parentContainer'>
        <Component {...pageProps} styles />
      </div>
      <footer className='globalFooter'>
        <span>© Vantage 2022</span>
        {/* <Image
            className='logo'
            src='/favicon.png'
            alt='Vantage Logo'
            width={16}
            height={16}
          /> */}
      </footer>
    </ThemeProvider>
  );
}

export default MyApp;
