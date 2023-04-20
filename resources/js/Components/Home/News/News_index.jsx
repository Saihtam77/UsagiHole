import React, { useState } from "react";
import Kana_sleep from "./kana_sleep.png";

import Noimage from "@/Components/noImage.png";

import { Head } from "@inertiajs/react";
import News_displayer from "./News_displayer";
import News_selector from "./News_selector";

const News_index = () => {
   const defaultText = "Default text";
   const [image, setImage] = useState(Noimage);
   const [text, setTexte] = useState(defaultText);

   const handleChange = (image, text) => {
      setImage(image);
      setTexte(text);
   };
   return (
      <>
         <Head title="Home" />
         {/* Mobile */}
         <section className="flex flex-col lg:container mx-auto">
            <div className="flex flex-col items-center lg:hidden">
               <img src={Kana_sleep} className="h-32 w-32 md:h-44 md:w-44" alt="" />
            </div>
            <News_displayer image={image} text={text} />
            <News_selector Noimage={Noimage} handleChange={handleChange} />
         </section>
      </>
   );
};

export default News_index;
