import React from "react";
import styles from "../../styles/Features.module.css";
import { BsFillCheckSquareFill } from "react-icons/bs";
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
            whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
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
    title: "Sub Title",
    desc: "This is a much longer description solely used for testing purposes, but it had to be the general length",
    icon: <BsFillCheckSquareFill />,
    color: "blue",
    backgroundColor: "lightBlue",
  },
  {
    title: "Sub Title",
    desc: "This is a much longer description solely used for testing purposes, but it had to be the general length",
    icon: <BsFillCheckSquareFill />,
    color: "blue",
    backgroundColor: "lightBlue",
  },
  {
    title: "Sub Title",
    desc: "This is a much longer description solely used for testing purposes, but it had to be the general length",
    icon: <BsFillCheckSquareFill />,
    color: "blue",
    backgroundColor: "lightBlue",
  },
];

export default Features;
