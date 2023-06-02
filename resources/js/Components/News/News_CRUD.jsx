import {Link, router, useForm} from "@inertiajs/react";
import React, {useState} from "react";
import News_editForm from "./News_editForm";



const News_CRUD = ({
   collapseList,
   setCollapseList,
   id,
   titre,
   news,
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
      router.delete(route("news.destroy", id));
   };

   return (
      <div className="flex flex-col w-full">
         <div className="flex items-center">
            <p>{titre}</p>
            <div className="flex gap-x-7 p-3">
               <Link onClick={showEdit} href={route("news.edit", id)} as="button">
                  Edit
               </Link>
               <Link as="button" onClick={handleDelete}>
                  Delete
               </Link>
            </div>
         </div>
         <div className={`collapse-form ${edit ? "active" : ""}`}>
            < News_editForm
               id={id}
               titre={titre}
               date={date}
               news={news}
               image={image}
               synopsis={synopsis}
            />
         </div>
      </div>
   );
};

export default News_CRUD;
