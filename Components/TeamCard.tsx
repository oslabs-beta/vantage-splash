import React from "react";
import Image from "next/image";
import styles from "../styles/TeamCard.module.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

interface CardProps {
  name: string;
  src: string;
  linkedIn: string;
  github: string;
  index: number;
}

const TeamCard = ({ name, src, linkedIn, github, index }: CardProps) => {
  const cardVariants: Variants = {
    offscreen: {
      x: 1500,
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.6,
        delay: 0.1 * index
      }
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={styles.container}
      whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)" }}
      transition={{duration: '.3'}}
    >
      <Image
        className={styles.pic}
        src={src}
        width={100}
        height={100}
        alt={"image of " + name}
      />
      <div className={styles.name}>{name}</div>
      <div className={styles.position}>Software Engineer</div>
      <div className={styles.links}>
        <motion.a
          href={linkedIn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin fill='#0072b1' />
        </motion.a>
        <motion.a
          href={github}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default TeamCard;
