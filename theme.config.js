// theme.config.js
import LogoSVG from "./Components/LogoSVG.tsx";

const config = {
  github: "https://github.com/oslabs-beta/Vantage",
  projectLink: "https://github.com/oslabs-beta/Vantage", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/oslabs-beta/Vantage-splash", // base URL for the docs repository
  titleSuffix: "",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: false,
  // floatTOC: true,
  footer: true,
  footerText: '© Vantage 2022',
  footerEditLink: '',
  logo: (
    <>
      <LogoSVG style={{ width: "50px" }} />
      <div style={{ fontSize: "1.7rem", fontWeight: 600, marginLeft: ".5rem" }}>
        Vantage
      </div>
    </>
  ),
  head: (
    <>
      <title>Vantage Documentation</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='description'
        content='documentation about vantage SEO monitoring'
      />
      <meta name='og:title' content='Vantage: NEXTjs Optimization' />
      <link rel='icon' href='/favicon.png' />
    </>
  ),
};

export default config;
