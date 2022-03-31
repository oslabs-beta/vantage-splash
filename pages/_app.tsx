import "nextra-theme-docs/style.css";
import "../styles/globals.scss";

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
