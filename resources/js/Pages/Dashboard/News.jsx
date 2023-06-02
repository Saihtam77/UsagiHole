import Data_list from "@/Components/Data_list";
import News_addForm from "@/Components/News/News_addForm";
import News_list from "@/Components/News/News_list";
import Dashboard_layouts from "@/Layouts/Dashboard_layouts";
import React from "react";

const News = ({news}) => {
   return (
      <Dashboard_layouts>
         <section className="w-full flex flex-col justify-center pt-12">
            <Data_list props={news} />
            <News_addForm />
         </section>
      </Dashboard_layouts>
   );
};

export default News;
