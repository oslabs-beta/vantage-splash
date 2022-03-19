import React from "react";
import styles from "../../styles/NavBar.module.css";
import LogoSVG from "./LogoSVG";
import { Button } from "evergreen-ui";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <LogoSVG className={styles.svg} />
        <h3>Vantage</h3>
      </div>

      <div className={styles.containerRight}>
        <Button>Docs</Button>
        <Button>Github</Button>
        <Button appearance="primary">Example</Button>
      </div>
    </div>
  );
};

export default NavBar;
