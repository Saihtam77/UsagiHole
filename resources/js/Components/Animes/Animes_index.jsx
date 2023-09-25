import React from "react";
import Noimage from "@/Components/noImage.png";
import {Link} from "@inertiajs/react";


const Animes_index = ({animes}) => {
   return (
      <section className=" container mx-auto flex flex-wrap gap-5">
         {animes.map((anime) => ( 
            <Link href={`catalogue/${anime.id}_${anime.titre}`} key={anime.id} className="flex flex-col items-center ">
               <img className="h-52 w-52" src={"/storage/Images/Animes/" + anime.image} alt=""/> {/* //The image resolution must be around 200x300 px for a better display */}
               <p>{anime.titre}</p>
            </Link>
         ))}
      </section>
   );
};

export default Animes_index;
