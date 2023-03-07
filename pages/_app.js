import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
// import Feature from "../components/Feature";
// import Grid from "../components/Grid";
import Page from "../components/Page";
// import Teaser from "../components/Teaser";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
import Card from "../components/Card";

const components = {
  // feature: Feature,
  // grid: Grid,
  // teaser: Teaser,
  page: Page,
  navbar: Navbar,
  hero: Hero,
  socialProof: SocialProof,
  cards: Card,
};

storyblokInit({
  accessToken: "TYulwhSrPEQj5W8zQnI5Rgtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
