import Layout from "@/Layouts/Layout";
import React from "react";

import Animes_index from "@/Components/Animes/Animes_index";
import {usePage} from "@inertiajs/react";
import SearchBar from "@/Components/SearchBar";

const Catalogue = ({animes}) => {
   return (
      <Layout>
         <main className="flex flex-col min-h-screen gap-y-10 mt-20">
            <SearchBar className=" w-full flex justify-center items-center gap-x-3 p-5" />

            <hr className="mx-5 border-black" />

            <Animes_index animes={animes} />
         </main>
      </Layout>
   );
};

export default Catalogue;
