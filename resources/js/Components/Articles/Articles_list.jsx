import {Link} from "@inertiajs/react";
import React, {useState} from "react";

import SearchBar from "../SearchBar";
import Article_CRUD from "./Article_CRUD";

const Articles_list = ({articles}) => {
   console.log(articles)
   const [collapseList, setCollapseList] = useState(false);
   const showMore = (e) => {
      e.preventDefault();
      setCollapseList(!collapseList);
   };

   return (
      <>
         <h1 className=" my-10 border-b w-1/2 text-lg">Liste des articles</h1>
         <article className="flex flex-col items-center container mx-auto">
            {/* Crud */}
            <div
               className={`flex flex-col gap-y-5  container overflow-auto collapse-list ${
                  collapseList ? "active" : ""
               }`}>
               <div className="flex justify-center">
                  <SearchBar className="flex w-1/2 items-center gap-x-5" />
               </div>
               {articles.map((article) => (
                  <div key={article.id} className="flex flex-none w-full gap-x-7">
                     <img
                        className=" rounded-lg w-28 max-h-28"
                        src={"/storage/Images/Articles/" + article.image}
                        alt=""
                     />
                     <Article_CRUD
                        collapseList={collapseList}
                        setCollapseList={setCollapseList}
                        id={article.id}
                        date={article.create_at}
                        titre={article.titre}
                        article={article.article}
                        synopsis={article.synopsis}
                        image={article.image}
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

export default Articles_list;
