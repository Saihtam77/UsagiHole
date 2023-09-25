import React from "react";
import Layout from "@/Layouts/Layout";


const New = ({ news }) => {
    return (
        <Layout>
            <main className="w-full flex flex-col min-h-screen">
                <section className="flex flex-col lg:flex-row lg:justify-between p-5">
                    {/* thumbnail */}
                    <div className="lg:w-1/2 px-3 flex justify-center items-center bg-full thumbnail"
                        style={{ backgroundImage: `url("/storage/Images/News/Thumbnail/${news.thumbnail}")` }}>
                    </div>
                    {/* info */}
                    <article className=" flex flex-col justify-end px-5">
                        <header className="flex justify-center text-2xl pt-5">
                            <b>{news.titre}</b>
                        </header>

                        <div className="flex flex-col justify-end">
                            <ul>
                                <li><b>Publier le :</b> {news.created_at} </li>

                            </ul>

                            <hr className="border w-full mb-5" />

                            <div className="container ">
                                <p>
                                    {news.synopsis}
                                </p>
                            </div>
                        </div>
                    </article>
                </section>
                {/* Hr */}
                <div className="flex justify-center">
                    <hr className="border  w-1/2 mt-5" />
                </div>
                {/* Hr */}
                <section className="p-5">
                    <article>
                        <p>
                            {news.news}
                        </p>
                    </article>
                </section>
            </main>
        </Layout>
    )
};

export default New