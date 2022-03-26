import TerminalDisplay from "../Components/TerminalDisplay";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { motion, useViewportScroll } from "framer-motion";
import CardContainer from "../Containers/CardContainer";
import GifContainer from "../Containers/GifContainer";
import Features from "../Components/Features";
import { useMediaQuery } from "@mantine/hooks";
import NavBar from "../Components/NavBar";

const Home: NextPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const width545 = useMediaQuery("(min-width: 545px)");
  return (
    <div className={styles.container}>
      <Head>
        <title>Vantage Homepage</title>
        <meta name='description' content='Vantage Homepage' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <NavBar scrollYProgress={scrollYProgress} />
      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <motion.h1
            style={{ maxWidth: "500px", margin: "auto" }}
            className={styles.title}
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          >
            NEXTjs Optimization with <span>Vantage</span>.
          </motion.h1>
          <motion.div
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          >
            <Image
              width={1006}
              height={601}
              layout='intrinsic'
              priority
              // className={styles.screenshot1}
              src='/splash/screenshot1.png'
              alt='Screenshot of Vantage'
            />
          </motion.div>
        </div>
        <Features />
        <TerminalDisplay
          command={
            width545
              ? "npm install vantage-next --save-dev"
              : "npm i -D vantage-next"
          }
        >
          <h5>
            Get started easily with npm and instantly start monitoring web
            vitals with each new commit
          </h5>
        </TerminalDisplay>
        <div>
          <h4>Features:</h4>
          <GifContainer />
        </div>
        <div className={styles.nextContainer}>
          <h4>
            Designed from the ground up to work seamlessly with <span>NEXTjs</span>
          </h4>
          <Image src='/splash/next.svg' layout='intrinsic' width={600} height={350} alt='' />
        </div>
        <div className={styles.cardContainer}>
          <h4>Meet the team!</h4>
          <CardContainer />
        </div>
      </main>
      <footer className={styles.footer}>
        <span>© Vantage 2022</span>
      </footer>
    </div>
  );
};

export default Home;
