import { storyblokEditable } from "@storyblok/react";

export default function SocialProof({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="max-w-full">
      <div className="container mx-auto my-10">
        <h3 className="text-3xl font-medium">{blok.subText}</h3>
        <h1 className="text-7xl font-bold">{blok.mainText}</h1>
      </div>
    </div>
  );
}
