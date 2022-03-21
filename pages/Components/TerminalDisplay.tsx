import React from "react";
import { Browser } from "react-window-ui";
import Typewriter from "typewriter-effect";
import styles from "../../styles/Terminal.module.css";

interface TerminalProps {
  command: string;
  desc: string;
}

const TerminalDisplay = ({ command, desc }: TerminalProps) => {
  return (
    <div className={styles.container}>
      <Browser background='lightgray' className={styles.terminalContainer}>
        <pre>
          <code>
            <Typewriter
              options={{
                strings: [command],
                autoStart: true,
                loop: true,
              }}
            />
          </code>
        </pre>
      </Browser>
      <div>
        {desc}
      </div>
    </div>
  );
};

export default TerminalDisplay;
