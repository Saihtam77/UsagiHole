import { Link } from "@inertiajs/react";
import React from "react";

const News_displayer = ({ id,image, titre }) => {
    return (
        <>
            <Link href={`blogs/news/${id}_${titre}`}>
                <article
                    className="bg-full relative flex items-center news_displayer"
                    style={{
                        backgroundImage: `url("/storage/Images/News/${image}")`
                    }}
                >
                    <div className="relative w-full flex justify-center items-center">
                        <p className="absolute z-10">{titre}</p>
                        <div className="bg-white opacity-50 w-full h-12"></div>
                    </div>
                </article>
            </Link>
        </>
    );
};

export default News_displayer;
