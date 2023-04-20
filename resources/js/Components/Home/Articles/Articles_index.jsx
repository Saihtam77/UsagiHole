import React from "react";

import Noimage from "@/Components/noImage.png";
import { Carousel } from "flowbite-react";

const Articles_index = () => {
   return (
      <section className="h-56 sm:h-64 xl:h-96">
         <Carousel className="container mx-auto rounded-none">
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
         </Carousel>
      </section>
   );
};

export default Articles_index;
