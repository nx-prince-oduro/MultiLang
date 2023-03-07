import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Card({ blok }) {
  return (
    <div>
      <div
        className="container mx-auto flex flex-row flex-wrap gap-6 my-10 
    
      "
        {...storyblokEditable(blok)}
      >
        {blok.card.map((nestedBlok) => (
          <div className="">
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            <div className="bg-orange-400 w-72 h-36 flex justify-between overflow-hidden">
              <div>
                <h1 className="p-4 font-bold text-2xl text-white">
                  {nestedBlok.cardTitle}
                </h1>
                {/* <h5>{nestedBlok.cardText}</h5> */}
              </div>
              <img src={nestedBlok.cardImg.filename} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
