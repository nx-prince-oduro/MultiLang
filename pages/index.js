import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story, locale }) {
  story = useStoryblokState(story, { customParent: "http://localhost:3000/" });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>{/* <h1>{story ? story.name : "My Site"}</h1> */}</header>

      <StoryblokComponent blok={story.content} />
      <div>
        <p>{locale}</p>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  let slug = "home";

  let sbParams = {
    version: "draft", // or 'published'
    language: locale,
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      locale,
    },
    revalidate: 3600,
  };
}
