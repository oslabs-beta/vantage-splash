import React from "react";
import Image from "next/image";
import styles from "../../styles/TeamCard.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface CardProps {
  name: string;
  src: string;
  linkedIn: string;
  github: string;
}

const TeamCard = ({ name, src, linkedIn, github }: CardProps) => {
  return (
    <div className={styles.container}>
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
          <FaLinkedin fill="#0072b1"/>
        </motion.a>
        <motion.a
          href={github}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>
      </div>
    </div>
  );
};

export default TeamCard;
