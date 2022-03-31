import Head from "next/head";
import Script from "next/script";
import "nextra-theme-docs/style.css";
import "../styles/globals.scss";

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZCQ52NTSKF`}
      />
      <Script
        id={"google-analytics"}
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZCQ52NTSKF', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
