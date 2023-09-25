import { Link } from "@inertiajs/react";
import React from "react";

const Seasonals_displayer = ({ titre,image, id }) => {
   return (
      <Link
         href={`/catalogue/${id}_${titre.replace(/ /g, "_")}`}
         className="rounded-full bg-full w-32 h-32 md:w-52 md:h-52 lg:w-80 lg:h-80 border"
         style={{ backgroundImage: `url("/storage/Images/Animes/${image}")` }}></Link>
   );
};

export default Seasonals_displayer;
