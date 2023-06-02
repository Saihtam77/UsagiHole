import Article_addForm from "@/Components/Articles/Article_addForm";
import Articles_list from "@/Components/Articles/Articles_list";
import Data_list from "@/Components/Data_list";
import Dashboard_layouts from "@/Layouts/Dashboard_layouts";
import {Head} from "@inertiajs/react";
import React from "react";

const Articles = ({articles}) => {
 
   return (
      <Dashboard_layouts>
         <Head title="Dashboard" />
         <section className="w-full flex flex-col justify-center pt-12">
            <Data_list props = {articles} />
            <Article_addForm />
         </section>
      </Dashboard_layouts>
   );
};

export default Articles;
