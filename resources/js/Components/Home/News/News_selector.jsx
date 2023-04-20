import React from "react";
import Toru from "./toru_uso.png";

const News_selector = ({ handleChange, Noimage }) => {
   const text1 = " oiroih";
   const text2 = " oirzaeazeih";
   return (
      <article className="relative bottom-10 flex">
         <div className="flex gap-3">
            <button onClick={() => handleChange(Noimage, text1)}>
               <img src={Noimage} className="w-32 md:w-44" alt="" />
            </button>

            <button onClick={() => handleChange(Noimage, text2)}>
               <img src={Noimage} className="w-32 md:w-44" alt="" />
            </button>
         </div>

         <div className="lg:flex justify-end hidden absolute  bottom-0 right-0">
            <img src={Toru} className="w-2/4" alt="" />
         </div>
      </article>
   );
};

export default News_selector;
