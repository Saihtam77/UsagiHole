import React from "react";

import Noimage from "@/Components/noImage.png";
import { Carousel } from "flowbite-react";
import { Link } from "@inertiajs/react";

const Articles_index = ({ articles }) => {
    return (
        <section className="h-56 sm:h-64 xl:h-96">

            <Carousel>
                {/* <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    Slide 1
                </div> */}
                {articles.map((article) => (
                    <Link href={`blogs/articles/${article.id}_${article.titre}`} key={article.id} className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img src={"/storage/Images/Articles/" + article.image} className="w-full" alt="" />
                    </Link>
                ))}
            </Carousel>

        </section>
    );
};

export default Articles_index;
