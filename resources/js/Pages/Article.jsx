import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";



const Article = ({ article }) => {

    /* const [collapse, setCollapse] = useState(false);

    const showMore = (e) => {
        e.preventDefault();
        setCollapse(!collapse);
    }; */

    return (
        <Layout>
            <main className="w-full flex flex-col min-h-screen">
                <section className="flex flex-col lg:flex-row lg:justify-between p-5">
                    {/* Thubnail */}
                    <div className="lg:w-1/2 px-3 flex justify-center items-center bg-full thumbnail"
                        style={{ backgroundImage: `url("/storage/Images/Articles/${article.image}")` }}>
                    </div>

                    {/* Infos */}
                    <article className=" flex flex-col justify-end px-5">
                        <header className="flex justify-center p-3 text-2xl">
                            <b>{article.titre}</b>
                        </header>

                        <div className="flex flex-col justify-end">
                            <ul>
                                <li><b>Publier le :</b> {article.created_at} </li>

                            </ul>


                            <hr className="border w-full mb-5" />
                            <div className="container mx-auto ">
                                <p>
                                    {article.synopsis}
                                </p>
                            </div>
                        </div>
                    </article>
                    
                </section>
                <div className="flex justify-center">
                    <hr className="border  w-1/2 mt-5" />
                </div>
                <section className="p-5">
                    <article>
                        <p>
                            {article.article}
                        </p>
                    </article>
                </section>
            </main>

        </Layout>
    )
}

export default Article;