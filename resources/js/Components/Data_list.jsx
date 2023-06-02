import {Link} from "@inertiajs/react";
import React, {useState} from "react";

import Data_CRUD from "./Data_CRUD";
import SearchBar from "./SearchBar";

const Data_list = ({props}) => {
   const [collapseList, setCollapseList] = useState(false);
   const showMore = (e) => {
      e.preventDefault();
      setCollapseList(!collapseList);
   };

   return (
      <>
         <h1 className=" my-10 border-b w-1/2 text-lg">Liste</h1>
         <article className="flex flex-col items-center container mx-auto">
            {/* Crud */}
            <div
               className={`flex flex-col gap-y-5  container overflow-auto collapse-list ${
                  collapseList ? "active" : ""
               }`}>
               <div className="flex justify-center">
                  <SearchBar className="flex w-1/2 items-center gap-x-5" />
               </div>
               {props.map((prop) => (
                  <div key={prop.id} className="flex flex-none w-full gap-x-7">
                     {prop.type === "Animes" && (
                        <img
                           className=" rounded-lg w-28 max-h-28"
                           src={"/storage/Images/Animes/" + prop.image}
                           alt="Images de l'animes"
                        />
                     )}

                     {prop.type === "News" && (
                        <img
                           className=" rounded-lg w-28 max-h-28"
                           src={"/storage/Images/News/" + prop.image}
                           alt="Images de la news"
                        />
                     )}

                     {prop.type === "Articles" && (
                        <img
                           className=" rounded-lg w-28 max-h-28"
                           src={"/storage/Images/Articles/" + prop.image}
                           alt="Images de l'articles"
                        />
                     )}

                     <Data_CRUD prop={prop} collapseList={collapseList} setCollapseList={setCollapseList} />
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

export default Data_list;
