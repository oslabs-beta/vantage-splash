import TeamCard from "../Components/TeamCard";
import styles from "../styles/CardContainer.module.scss";
import { motion } from "framer-motion";

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
    linkedIn: "https://www.linkedin.com/in/mnoah/",
    github: "https://github.com/mnoah1",
    name: "Michael Noah",
    src: "/headshots/michael.png",
  },
  {
    linkedIn: "https://www.linkedin.com/in/elidavis42/",
    github: "https://github.com/elidavis42/",
    name: "Eli Davis",
    src: "/headshots/eli.jpeg",
  },
  {
    linkedIn: "https://www.linkedin.com/in/perezp92/",
    github: "https://github.com/perezp92",
    name: "Paul Perez",
    src: "/headshots/paul.jpg",
  },
];

export default CardContainer;
