import React, { useState } from "react";
import Kana_sleep from "./kana_sleep.png";

import Noimage from "@/Components/noImage.png";

import { Head } from "@inertiajs/react";
import News_displayer from "./News_displayer";
import News_selector from "./News_selector";

const News_index = ({news}) => {
   const defaultText = "News";
   const [image, setImage] = useState(news[0].image);
   const [titre, setTitre] = useState(news[0].titre);
   const [id, setId] = useState(news[0].id);

   const handleChange = (image, titre,id) => {
      setImage(image);
      setTitre(titre);
      setId(id);
   };
   return (
      <>
         <Head title="Home" />
         {/* Mobile */}
         <section className="flex flex-col lg:container lg:mx-auto">
            <div className="flex flex-col items-center lg:hidden">
               <img src={Kana_sleep} className="h-32 w-32 md:h-44 md:w-44" alt="" />
            </div>
            <News_displayer id={id} image={image} titre={titre} />
            <News_selector news={news} handleChange={handleChange} />
         </section>
      </>
   );
};

export default News_index;
