import Articles_index from "@/Components/Articles/Articles_index";
import SearchBar from "@/Components/SearchBar";

import Layout from "@/Layouts/Layout";
import React from "react";

const Blogs = ({articles}) => {
   console.log(articles)
   return (
      <Layout>
         <main className="flex flex-col min-h-screen gap-y-10 mt-20">
            <SearchBar className=" w-full flex justify-center items-center gap-x-3 p-5" />

            <hr className="mx-5 border-black" />

            <Articles_index articles={articles} />
         </main>
      </Layout>
   );
};

export default Blogs;
