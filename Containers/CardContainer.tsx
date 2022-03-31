// import TeamCard from "../Components/TeamCard";
import styles from "../styles/CardContainer.module.scss";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const CardContainer = () => {

  return (
    <motion.div className={styles.container}>
      {data.map(({ name, src, linkedIn, github }, i) => (
        <motion.div
          className={styles.innerContainer}
          whileInView={{
            rotate: [0, 3, -3, 3, 0],
            transition: {
              type: "spring",
              bounce: 0.2,
              duration: 0.4,
            },
          }}
          viewport={{ once: true, amount: 1 }}
          whileHover={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)" }}
          transition={{ duration: ".3" }}
          key={i}
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
