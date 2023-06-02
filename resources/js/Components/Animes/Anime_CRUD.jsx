import {Link, router, useForm} from "@inertiajs/react";
import React, {useState} from "react";

import Anime_editForm from "./Anime_editForm";

const Anime_CRUD = ({
   collapseList,
   setCollapseList,
   id,
   nom,
   genres,
   date_de_diffusion,
   seasonal,
   auteur_oeuvre_originelle,
   studio,
   image,
   synopsis,
}) => {
   const [edit, setEdit] = useState(false);
   const showEdit = (e) => {
      e.preventDefault();
      setCollapseList(collapseList=true)
      setEdit(!edit);
   };

   const handleDelete = (e) => {
      e.preventDefault();
      router.delete(route("animes.destroy", id));
   };

   return (
      <div className="flex flex-col w-full">
         <div className="flex items-center">
            <p>{nom}</p>
            <div className="flex gap-x-7 p-3">
               <Link onClick={showEdit} href={route("animes.edit", id)} as="button">
                  Edit
               </Link>
               <Link as="button" onClick={handleDelete}>
                  Delete
               </Link>
            </div>
         </div>
         <div className={`collapse-form ${edit ? "active" : ""}`}>
            <Anime_editForm
               id={id}
               nom={nom}
               genres={genres}
               date_de_diffusion={date_de_diffusion}
               seasonal={seasonal}
               auteur_oeuvre_originelle={auteur_oeuvre_originelle}
               studio={studio}
               image={image}
               synopsis={synopsis}
            />
         </div>
      </div>
   );
};

export default Anime_CRUD;
