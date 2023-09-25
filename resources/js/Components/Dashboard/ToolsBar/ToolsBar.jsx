import {Link} from "@inertiajs/react";
import React from "react";


const ToolsBar = ({state}) => {

   return (
      <div className="flex flex-col items-center bg-slate-600 text-white border-white min-h-screen w-44">
         <Link href={route("dashboard")} preserveState className="flex justify-center items-center border-y p-5 w-full">
            <p>Board</p>
         </Link>
         <Link href={route("episodes.index")} preserveState className="flex justify-center items-center border-y p-5 w-full">
            <p>Episode</p>
         </Link>
         <Link  href={route("animes.index")} preserveState className="flex justify-center items-center border-y p-5 w-full">
            <p>Animes</p>  
         </Link>

         <Link  href={route("articles.index")} preserveState className="flex justify-center items-center border-y p-5 w-full">
            <p>Articles</p>  
         </Link>

         <Link  href={route("news.index")} preserveState className="flex justify-center items-center border-y p-5 w-full">
            <p>News</p>  
         </Link>

         
        
      </div>
   );
};

export default ToolsBar;
