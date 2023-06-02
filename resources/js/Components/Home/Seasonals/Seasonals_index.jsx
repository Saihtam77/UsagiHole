import React, { useState } from "react";
import Noimage from "@/Components/noImage.png";
import Seasonals_displayer from './Seasonals_displayer';
import Seasonals_text from './Seasonals_text';
import Seasonals_selector from './Seasonals_selector';

const Seasonals_index = ({animes}) => {

   const defaultTexte=" oiunoinb"
   
   const [image, setimages] = useState(animes[0].image);
   const [text, settext] = useState(animes[0].nom);      
   const handleChange = (image, text) => {
      setimages(image);
      settext(text);
   };
   return (
      <section className="flex flex-col items-center p-5 gap-y-12 lg:flex-row lg:justify-between lg:container lg:mx-auto ">
         <Seasonals_displayer image={image} />
         <Seasonals_selector handleChange={handleChange} animes={animes} Noimage={Noimage} />
         <Seasonals_text text={text} />
      </section>
   );
};

export default Seasonals_index;
