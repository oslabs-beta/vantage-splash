import TeamCard from "../Components/TeamCard";
import styles from "../../styles/CardContainer.module.css";
import { motion, Variants } from "framer-motion";

const CardContainer = () => {
  
  return (
    <motion.div
      className={styles.container}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
    >
      {data.map((cur, i) => (
        <TeamCard key={i} {...cur} index={i} />
      ))}
    </motion.div>
  );
};

const data = [
  {
    linkedIn: "https://www.linkedin.com/in/ari-shoham/",
    github: "https://github.com/arishoham",
    name: "Ari Shoham",
    src: "/headshots/ari.png",
  },
  {
    linkedIn: "https://www.linkedin.com/in/ari-shoham/",
    github: "https://github.com/arishoham",
    name: "Ari Shoham",
    src: "/headshots/ari.png",
  },
  {
    linkedIn: "https://www.linkedin.com/in/ari-shoham/",
    github: "https://github.com/arishoham",
    name: "Ari Shoham",
    src: "/headshots/ari.png",
  },
  {
    linkedIn: "https://www.linkedin.com/in/ari-shoham/",
    github: "https://github.com/arishoham",
    name: "Ari Shoham",
    src: "/headshots/ari.png",
  },
];

export default CardContainer;
