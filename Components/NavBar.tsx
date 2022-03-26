import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.scss";
import LogoSVG from "./LogoSVG";
import { Button, Group } from "@mantine/core";
import Link from "next/link";
import { motion } from "framer-motion";
import useSWR from "swr";
import { AiOutlineStar } from "react-icons/ai";

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

const NavBar = ({ scrollYProgress }) => {
  const [isStarted, setIsStarted] = useState(false);
  const { data, error } = useSWR(
    "https://api.github.com/repos/oslabs-beta/Vantage",
    fetcher
  );

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
          <div className={styles.name}>Vantage</div>
        </a>
      </Link>

      <div className={styles.containerRight}>
        <a
          href='https://github.com/oslabs-beta/Vantage'
          target='_blank'
          rel='noreferrer'
        >
          <Button variant='outline' color='violet' className={styles.github}>
            Github
            {data?.stargazers_count && (
              <div>
                <AiOutlineStar /> {data.stargazers_count}
              </div>
            )}
          </Button>
        </a>
        <Link href='/vantage_report_sample.html'>
          <a>
            <Button variant='outline' color='violet'>
              Demo
            </Button>
          </a>
        </Link>
        <Link href='/docs'>
          <a>
            <Button color='violet'>Docs</Button>
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default NavBar;
