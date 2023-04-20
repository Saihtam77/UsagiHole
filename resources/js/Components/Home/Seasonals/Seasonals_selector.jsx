import React from "react";

const Seasonals_selector = ({handleChange, Noimage}) => {
   const texte1 = "Text1";
   const texte2 = "Text2";
   return (
      <article className="w-full lg:w-auto p-5 overflow-x-auto">
         <div className="container flex gap-x-7 lg:flex-col lg:gap-y-7">
            <button
               onClick={() => handleChange(Noimage, texte1)}
               className="bg-full w-16 h-16 md:w-32 md:h-32 lg:w-28 lg:h-28 border rounded-full flex-none"
               style={{backgroundImage: `url(${Noimage})`}}></button>
            <button
               onClick={() => handleChange(Noimage, texte2)}
               className="bg-full w-16 h-16 md:w-32 md:h-32 lg:w-28 lg:h-28 border rounded-full flex-none"
               style={{backgroundImage: `url(${Noimage})`}}></button>
            <button
               onClick={() => handleChange(Noimage, texte1)}
               className="bg-full w-16 h-16 md:w-32 md:h-32 lg:w-28 lg:h-28 border rounded-full flex-none"
               style={{backgroundImage: `url(${Noimage})`}}></button>
            <button
               onClick={() => handleChange(Noimage, texte2)}
               className="bg-full w-16 h-16 md:w-32 md:h-32 lg:w-28 lg:h-28 border rounded-full flex-none"
               style={{backgroundImage: `url(${Noimage})`}}></button>
            <button
               onClick={() => handleChange(Noimage, texte1)}
               className="bg-full w-16 h-16 md:w-32 md:h-32 lg:w-28 lg:h-28 border rounded-full flex-none"
               style={{backgroundImage: `url(${Noimage})`}}></button>
         </div>
      </article>
   );
};

export default Seasonals_selector;
