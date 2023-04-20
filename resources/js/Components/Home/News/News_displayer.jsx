import React from "react";

const News_displayer = ({image,text}) => {
   return (
      <article
         className=" h-44 md:h-80 lg:h-96 bg-full relative flex items-center"
         style={{ backgroundImage: `url(${image})` }}>
         <div className="relative w-full flex justify-center items-center">
            <p className="absolute z-10">{text}</p>
            <div className="bg-white opacity-50 w-full h-12"></div>
         </div>
      </article>
   );
};

export default News_displayer;
