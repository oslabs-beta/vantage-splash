import TeamCard from "../Components/TeamCard";
import styles from "../../styles/CardContainer.module.css";

const CardContainer = () => {
  return (
    <div className={styles.container}>
      {data.map((cur, i) => (
        <TeamCard key={i} {...cur} />
      ))}
    </div>
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
