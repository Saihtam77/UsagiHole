import { Link } from "@inertiajs/react";
import React, { useState } from "react";

import SearchBar from "../SearchBar";

import News_CRUD from "./News_CRUD";

const News_list = (news) => {
    const [collapseList, setCollapseList] = useState(false);
    const showMore = (e) => {
        e.preventDefault();
        setCollapseList(!collapseList);
    };

    return (
        <>
            <h1 className=" my-10 border-b w-1/2 text-lg">
                Liste des articles
            </h1>
            <article className="flex flex-col items-center container mx-auto">
                {/* Crud */}
                <div
                    className={`flex flex-col gap-y-5  container overflow-auto collapse-list ${
                        collapseList ? "active" : ""
                    }`}
                >
                    <div className="flex justify-center">
                        <SearchBar className="flex w-1/2 items-center gap-x-5" />
                    </div>
                    {news.map((data) => (
                        <div
                            key={data.id}
                            className="flex flex-none w-full"
                        >
                            <img
                                className=" rounded-lg w-28 max-h-28"
                                src={
                                    "/storage/Images/News/Thumbnail/" +
                                    data.thumbnail
                                }
                                alt=""
                            />
                            <News_CRUD
                                collapseList={collapseList}
                                setCollapseList={setCollapseList}
                                id={data.id}
                                date={data.create_at}
                                titre={data.titre}
                                news={data.news}
                                synopsis={data.synopsis}
                                image={data.image}
                            />
                        </div>
                    ))}
                </div>
                {/* show more */}
                <Link
                    as="button"
                    onClick={showMore}
                    className="border rounded-lg p-3 bg-blue-400"
                >
                    {collapseList ? "Reduce" : "Show more"}
                </Link>
            </article>
        </>
    );
};

export default News_list;
