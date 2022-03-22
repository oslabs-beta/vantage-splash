import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.scss";
import LogoSVG from "./LogoSVG";
import { Button } from "@mantine/core";
import Link from "next/link";
import { motion } from "framer-motion";

const NavBar = ({ scrollYProgress }) => {
  const [isStarted, setIsStarted] = useState(false);
  useEffect(
    () => scrollYProgress.onChange((v) => setIsStarted(v > 0)),
    [scrollYProgress]
  );
  return (
    <motion.div
      className={styles.container}
      animate={{
        boxShadow: isStarted
          ? "0 0 20px rgba(0, 0, 0, 0.242)"
          : "0 0 20px rgba(0, 0, 0, 0)",
      }}
    >
      <Link href='/'>
        <a className={styles.containerLeft}>
          <LogoSVG className={styles.svg} />
          <h3>Vantage</h3>
        </a>
      </Link>

      <div className={styles.containerRight}>
        <Button variant='outline' color='violet'>
          <a href='https://github.com/oslabs-beta/Vantage'>Github</a>
        </Button>
        <Button variant='outline' color='violet'>
          <Link href='/vantage_report_sample.html'>
            <a>Example</a>
          </Link>
        </Button>
        <Button color='violet'>
          <Link href='/docs'>
            <a>Docs</a>
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default NavBar;
