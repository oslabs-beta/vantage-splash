import React from "react";
import styles from "../styles/Features.module.scss";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { BiGitBranch } from "react-icons/bi";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaFeatherAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className={styles.container}>
      <h4>What does Vantage have to offer?</h4>
      <span>
        Unlike other serverless monitoring tools, Shepherd is free-to-use and
        open-source. Manage your Lambda functions in real time and pull valuable
        insights with your customizable Lambda dashboard.
      </span>
      <div className={styles.cardContainer}>
        {cardData.map(({ title, desc, icon, color, backgroundColor }, i) => (
          <motion.div
            key={i}
            className={styles.card}
            whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)" }}
            transition={{duration: '.3'}}
          >
            <div className={styles.iconContainer} style={{ backgroundColor }}>
              {React.cloneElement(icon, { size: 40, color })}
            </div>
            <h4>{title}</h4>
            <span>{desc}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const cardData = [
  {
    title: "Git integrations",
    desc: "Hands-free data capture:  Runs in the background as you commit, so it's quick and easy to review data over time",
    icon: <BiGitBranch />,
    color: "2096F3",
    backgroundColor: "#E3F2FD",
  },
  {
    title: "Comparisons",
    desc: "Clear comparisons:  See exactly which recommendations changed, and how your updates have directly influenced specific metrics",
    icon: <MdOutlinePublishedWithChanges />,
    color: "#673AB6",
    backgroundColor: "#EDE7F6",
  },
  {
    title: "Lightweight",
    desc: "This is a much longer description solely used for testing purposes, but it had to be the general length",
    icon: <FaFeatherAlt />,
    color: "#00C852",
    backgroundColor: "#B9F6C9",
  },
];

export default Features;
