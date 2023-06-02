import {Link} from "@inertiajs/react";
import React, {useState} from "react";
import Input from "../Form/Input";
import SearchBar from "../SearchBar";
import Anime_Edit from "./Anime_editForm";
import Anime_CRUD from "./Anime_CRUD";

const Animes_list = ({animes}) => {
   const [collapseList, setCollapseList] = useState(false);
   const showMore = (e) => {
      e.preventDefault();
      setCollapseList(!collapseList);
   };

   return (
      <>
         <h1 className=" my-10 border-b w-1/2 text-lg">Liste des anime</h1>
         <article className="flex flex-col items-center container mx-auto">
            {/* Crud */}
            <div className={`flex flex-col gap-y-5  container overflow-auto collapse-list ${collapseList ? "active" : ""}`}>
               <div className="flex justify-center">
                  <SearchBar className="flex w-1/2 items-center gap-x-5" />
               </div>
               {animes.map((anime) => (
                  <div key={anime.id} className="flex flex-none w-full gap-x-7">
                     <img className=" rounded-lg w-28 max-h-28" src={"/storage/Images/Animes/" + anime.image} alt="" />
                     <Anime_CRUD
                        collapseList={collapseList}
                        setCollapseList={setCollapseList}
                        id={anime.id}
                        nom={anime.nom}
                        genres={anime.genres}
                        date_de_diffusion={anime.date_de_diffusion}
                        seasonal={anime.seasonal}
                        auteur_oeuvre_originelle={anime.auteur_oeuvre_originelle}
                        studio={anime.studio}
                        image={anime.image}
                        synopsis={anime.synopsis}
                     />
                  </div>
               ))}
            </div>
            {/* show more */}
            <Link as="button" onClick={showMore} className="border rounded-lg p-3 bg-blue-400">
               {collapseList ? "Reduce" : "Show more"}
            </Link>
         </article>
      </>
   );
};

export default Animes_list;
