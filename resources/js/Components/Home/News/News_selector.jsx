import React from "react";
import Toru from "./toru_uso.png";

const News_selector = ({ handleChange, news }) => {
    
    return (
        <article className="relative bottom-10 flex">
            <div className="flex gap-3">
                {news.map((single_news) => (
                    <button onClick={() => handleChange(single_news.image, single_news.titre, single_news.id)} key={single_news.id}>
                        <img src={"/storage/Images/News/Thumbnail/"+single_news.thumbnail} className="w-32 md:w-44" alt="" />
                    </button>  
                ))}
            </div>

            <div className="lg:flex justify-end hidden absolute  bottom-0 right-0">
                <img src={Toru} className="w-2/4" alt="" />
            </div>
        </article>
    );
};

export default News_selector;
