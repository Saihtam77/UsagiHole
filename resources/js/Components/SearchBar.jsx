import React from "react";
import Input from "./Form/Input";
import search_icone from "@/Components/Images/Icones/search.png"

const SearchBar = ({className}) => {
   return (
      <div className={className}>
         <div className="w-7"><img src={search_icone} className="" alt="Search icone" /></div>
         <Input type="search" placeholder="oeuvre recherché" />
      </div>
   );
};

export default SearchBar;
