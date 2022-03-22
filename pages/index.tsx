import TerminalDisplay from "../Components/TerminalDisplay";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { motion, useViewportScroll } from "framer-motion";
import CardContainer from "../Containers/CardContainer";
import GifContainer from "../Containers/GifContainer";
import Features from "../Components/Features";
import useWindowDimensions from "../hooks/useWindowSize";

const Home: NextPage = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div className={styles.container}>
      <Head>
        <title>Vantage</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <motion.h1
            className={styles.title}
            initial={{ x: -600 }}
            animate={{ x: 0 }}
          >
            NEXTjs Optimization with <span>Vantage</span>.
          </motion.h1>
          <motion.div
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            // transition={{ ease: "easeOut", duration: 0.3 }}
            // transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Image
              width={1006}
              height={601}
              layout='intrinsic'
              priority
              // className={styles.screenshot1}
              src='/screenshot1.png'
              alt='Screenshot of Vantage'
            />
          </motion.div>
        </div>
        <Features />
        <TerminalDisplay
          command={
            width === undefined || width > 450
              ? ["npm install vantage-next --save-dev"]
              : ["npm i -D vantage-next"]
          }
          desc='Get started easily with npm and instantly start monitoring web vitals with each new commit'
        />
        <div>
          <h4>Features:</h4>
          <GifContainer />
        </div>
        <div className={styles.cardContainer}>
          <h4>Meet the team!</h4>
          <CardContainer />
        </div>
      </main>
    </div>
  );
};

export default Home;
