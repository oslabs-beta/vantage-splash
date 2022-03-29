import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/GifContainer.module.scss";
import { motion } from "framer-motion";


const GifContainer = () => {
  const [section, setSection] = useState(0);
  const sectionComponents = sections.map(({ title, description }, i) => (
    <motion.div
      key={i}
      onClick={(_) => setSection(i)}
      className={styles.section}
      initial={{ backgroundColor: "#ffffff" }}
      animate={{ backgroundColor: section === i ? "#EDE7F6" : "#ffffff" }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  ));

  const imageComponents = sections.map(({ gif, width, height }, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: section === i ? 1 : 0, x: section === i ? 0 : 200 }}
      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
    >
      {section === i && (
        <Image
          priority={i === 0 ? true : false}
          className={styles.image}
          src={gif}
          width={width}
          height={height}
          layout='intrinsic'
          alt='alt'
        />
      )}
    </motion.div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.sectionContainer}>{sectionComponents}</div>
      <div className={styles.imageContainer}>{imageComponents}</div>
    </div>
  );
};

const sections = [
  {
    title: "Compare Commit Results",
    description:
      "Easily compare progress made between commits by selecting them on the graph. Then all the suggestions will display the difference in order of importance.",
    gif: "/splash/toggle-range.gif",
    width: 600,
    height: 431,
  },
  {
    title: "Choose Endpoints",
    description:
      "Quickly switch between all the endpoints in your site to efficiently track web vitals and suggestions throughout your app.",
    gif: "/splash/endpoint-select.gif",
    width: 600,
    height: 431,
  },
  // {
  //   title: "Choose Endpoints",
  //   description:
  //     "Quickly switch between all the endpoints in your site to efficiently track web vitals and suggestions throughout your app.",
  //   gif: "/splash/endpoint-select.gif",
  //   width: 600,
  //   height: 431,
  // },
];

export default GifContainer;
