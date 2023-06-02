import { Link } from '@inertiajs/react';
import React from 'react';

const News_index = ({articles}) => {
    return (
        <section className=" container mx-auto flex flex-wrap gap-5">
         {articles.map((article) => (
            <Link href={`catalogue/${article.id}_${article.titre}`} key={article.id} className="flex flex-col items-center w-52">
               <img className="w-full" src={"/storage/Images/Articles/" + article.image} alt=""/>
               <p>{article.titre}</p>
            </Link>
         ))}
      </section>
    );
};

export default News_index;