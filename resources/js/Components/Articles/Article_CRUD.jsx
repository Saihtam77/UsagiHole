import {Link, router, useForm} from "@inertiajs/react";
import React, {useState} from "react";
import Article_editForm from "./Article_editForm";


const Article_CRUD = ({
   collapseList,
   setCollapseList,
   id,
   titre,
   article,
   date,
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
      router.delete(route("articles.destroy", id));
   };

   return (
      <div className="flex flex-col w-full">
         <div className="flex items-center">
            <p>{titre}</p>
            <div className="flex gap-x-7 p-3">
               <Link onClick={showEdit} href={route("articles.edit", id)} as="button">
                  Edit
               </Link>
               <Link as="button" onClick={handleDelete}>
                  Delete
               </Link>
            </div>
         </div>
         <div className={`collapse-form ${edit ? "active" : ""}`}>
            < Article_editForm
               id={id}
               titre={titre}
               date={date}
               article={article}
               image={image}
               synopsis={synopsis}
            />
         </div>
      </div>
   );
};

export default Article_CRUD;
