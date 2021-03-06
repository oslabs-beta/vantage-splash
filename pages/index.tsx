import React from "react";
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
import Link from "next/link";

const Home: NextPage = () => {
  const { scrollYProgress } = useViewportScroll();

  const width545 = useMediaQuery("(min-width: 545px)");
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Vantage | Next.js Optimization
        </title>
        <meta
          name='description'
          content='Developer tool for Next.js performance optimization. Analyze key web metrics in the background with every commit!'
        />
        <meta property='og:title' content='Vantage' />
        <meta
          property='og:type'
          content='Developer tool for Next.js performance optimization. Analyze key web metrics in the background with every commit!'
        />
        <meta property='og:site_name' content='Vantage' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://vantagenext.com/' />
        <meta
          property='og:image'
          content='https://vantagenext.com/openGraph.png'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Vantage' />
        <meta
          name='twitter:description'
          content='Developer tool for Next.js performance optimization. Analyze key web metrics in the background with every commit!'
        />
        <meta
          name='twitter:image'
          content='https://vantagenext.com/openGraphSquare.png'
        />

        <meta name='description' content='Developer tool for Next.js performance optimization. Analyze key web metrics in the background with every commit!' />
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
            Next.js Performance Monitoring with <span>Vantage</span>.
          </motion.h1>
          <Link href='/vantage_report_sample.html'>
            <a>
              <motion.div
                className={styles.dashboardImage}
                initial={{ x: 600 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              >
                <Image
                  width={1550}
                  height={1162}
                  layout='intrinsic'
                  priority
                  src='/splash/dashboard-view.png'
                  alt='Screenshot of Vantage'
                />
              </motion.div>
            </a>
          </Link>
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
            Designed from the ground up to work seamlessly with{" "}
            <span>Next.js</span>
          </h4>
          <Image
            src='/splash/next.svg'
            layout='intrinsic'
            width={600}
            height={350}
            alt=''
          />
        </div>
        <div className={styles.cardContainer}>
          <h4>Meet the team!</h4>
          <CardContainer />
        </div>
      </main>
      <footer className={styles.footer}>
        <span>?? Vantage 2022</span>
      </footer>
    </div>
  );
};

export default Home;
