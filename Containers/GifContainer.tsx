import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/GifContainer.module.css";
import { motion } from "framer-motion";

const GifContainer = () => {
  const [section, setSection] = useState(0);
  const sectionComponents = sections.map(({ title, description }, i) => (
    <motion.div
      key={i}
      onClick={(_) => setSection(i)}
      className={styles.section}
      initial={{ backgroundColor: "#ffffff" }}
      animate={{ backgroundColor: section === i ? '#ca95ff74' : "#ffffff" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  ));

  const imageComponents = gifs.map((url, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: section === i ? 1 : 0, x: section === i ? 0 : 200 }}
    >
      {section === i && (
        <Image
          priority={i===0 ? true : false}
          className={styles.image}
          src={url}
          width={474}
          height={246}
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
    title: "This is the title",
    description: "This is a very long description about the title",
  },
  {
    title: "This is the title",
    description: "This is a very long description about the title",
  },
  {
    title: "This is the title",
    description: "This is a very long description about the title",
  },
];

const gifs = ["/gif-test.gif", "/gif-test.gif", "/gif-test.gif"];

export default GifContainer;
