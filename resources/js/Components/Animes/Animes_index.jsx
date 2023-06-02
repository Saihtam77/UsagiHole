import React from "react";
import Noimage from "@/Components/noImage.png";
import {Link} from "@inertiajs/react";


const Animes_index = ({animes}) => {
   return (
      <section className=" container mx-auto flex flex-wrap gap-5">
         {animes.map((anime) => (
            <Link href={`catalogue/${anime.id}_${anime.titre}`} key={anime.id} className="flex flex-col items-center w-52">
               <img className="w-full" src={"/storage/Images/Animes/" + anime.image} alt=""/>
               <p>{anime.titre}</p>
            </Link>
         ))}
      </section>
   );
};

export default Animes_index;
