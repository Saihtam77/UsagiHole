import News_index from "@/Components/Home/News/News_index";
import Seasonals_index from "@/Components/Home/Seasonals/Seasonals_index";
import Layout from "@/Layouts/Layout";
import React from "react";
import Episodes_index from "@/Components/Home/Episodes/Episodes_index";
import Articles_index from "@/Components/Home/Articles/Articles_index";

const Home = ({ animes, news, articles, episodes }) => {
    return (
        <Layout>
            <main className="flex flex-col min-h-screen gap-y-10">
                {news && <News_index news={news} />}

                {animes && <Seasonals_index animes={animes} />}
                {episodes && <Episodes_index episodes={episodes} />}

                {articles && <Articles_index articles={articles} />}
            </main>
        </Layout>
    );
};

export default Home;
