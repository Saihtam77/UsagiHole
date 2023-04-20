import React from "react";
import Noimage from "@/Components/noImage.png";
import { Link } from "@inertiajs/react";
import Anime from "./Anime";

const Animes_index = ({animes}) => {
   return (
      <section className="mx-auto flex flex-wrap gap-5">
          {animes.map((anime) => (
               <Anime nom={anime.nom} img={Noimage} />
            ))}
      </section>
   );
};

export default Animes_index;
