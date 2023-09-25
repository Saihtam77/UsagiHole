import { Link, router, useForm } from "@inertiajs/react";
import React, { useState } from "react";

import Anime_editForm from "./Animes/Anime_editForm";
import Episode_addForm from "./Animes/Episodes/Episode_addForm";
import Article_editForm from "./Articles/Article_editForm";
import News_editForm from "./News/News_editForm";

const Data_CRUD = ({ collapseList, setCollapseList, prop }) => {
   const [edit, setEdit] = useState(false);

   const showEdit = (e) => {
      e.preventDefault();
      setCollapseList((collapseList = true));
      setEdit(!edit);
   };

  


   return (
      <div className="flex flex-col w-full">
         <div className="flex items-center">
            <p>{prop.titre}</p>
            <div className="flex gap-x-7 p-3">
               <Link onClick={showEdit} as="button">
                  Edit
               </Link>
               {prop.type === "Animes" && (
                  <>
                     <Link
                        as="button"
                        onClick={(e) => {
                           e.preventDefault();
                           router.delete(route("animes.destroy", prop.id));
                        }}>
                        Delete
                     </Link>


                  </>

               )}
               {prop.type === "Articles" && (
                  <Link
                     as="button"
                     onClick={(e) => {
                        e.preventDefault();
                        router.delete(route("articles.destroy", prop.id));
                     }}>
                     Delete
                  </Link>
               )}
               {prop.type === "News" && (
                  <Link
                     as="button"
                     onClick={(e) => {
                        e.preventDefault();
                        router.delete(route("news.destroy", prop.id));
                     }}>
                     Delete
                  </Link>
               )}
            </div>
         </div>
         <div className={`collapse-form ${edit ? "active" : ""}`}>
            {prop.type === "Animes" && <Anime_editForm prop={prop} />}
            {prop.type === "Articles" && <Article_editForm prop={prop} />}
            {prop.type === "News" && <News_editForm prop={prop} />}
         </div>
        
      </div>
   );
};

export default Data_CRUD;
