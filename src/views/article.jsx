
import { useParams, Link } from "react-router-dom";
import { ShareButtons } from "../components/shareButtons";
import "../styles/article.css";
import { useState } from "react";
import { getArticleByTitle, getRandomArticles } from "../services/blogServices";
import { useEffect } from "react";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { dateFormat, myUrl } from "../services/global";
import { PageMetaTags } from "../components/myMetTage";

export default function Article() {

    const { title } = useParams(); //short title 

    const [article, updateArticle] = useState();
    const [state, updateState] = useState('loading');
    const [suggestion, updateSuggestion] = useState();

    const url = myUrl + '/blog/' + title;

    const getSuggestions = useCallback(async () => {
        const { data } = await getRandomArticles(title);
        if (data) {
            updateSuggestion(data);
        }
    }, [title]);


    const getArticle = useCallback(async () => {

        const { data, error } = await getArticleByTitle(title); // get article by short title 
        if (error) {
            updateState('error');
            console.log(error.message);
        } else {
            updateArticle(data[0]);
            updateState('data');
            console.log(data);
            getSuggestions(data[0]['id']);
        }
    }


        , [title, getSuggestions]);





    useEffect(() => {
        getArticle();
    }, [getArticle]);

    if (state === 'loading') {

        return <div>
            <div className="article-page" >
                <div className="centerCircular">
                    <FontAwesomeIcon icon={faSpinner} spin size="lg" />
                </div>
            </div>
        </div>
    }

    if (state === 'error') {
        return <div>
            <div className="article-page" >
                <div className="centerCircular">
                    <p className="error">
                        Sorry something error happened,

                    </p>
                </div>
            </div>
        </div>
    } else {



        const html = article['body'];


        return (
            <div className="article-page">
                <PageMetaTags description={article['description']} title={article['title']} url={url}
                    imageUrl={article['image_url']} />
                <div className="blog-bar">
                    <div className="logom" >
                        <img src="/assets/images/logo512.png" alt="W" />
                        SoluTrend </div>
                    <div className="navigation-blog">
                        <Link to={'/blog'}>
                            Blog
                        </Link>
                        <Link to={'/'}>
                            About
                        </Link>
                    </div>
                </div>
                <h1 className="article-title-page">
                    {article['title']}
                </h1>
                <h3 className="description-article-page">
                    {article['description']}
                </h3>
                <p className="creat-at">
                    {dateFormat(article['created_at'])}
                </p>
                <img src={article['image_url']} alt="" className="article-image-page" />
                <div className="article-content-page" dangerouslySetInnerHTML={{ __html: html }}>

                </div>

                <ShareButtons url={url} description={article['description']} title={article['title']} image={article['image_url']} />
                {suggestion && <><div className="recent-posts">Discover more</div>
                    <div className="suggestion-wraper">
                        {suggestion.map((r, index) => {
                            return <div className="suggestion-articles" key={index}>
                                <div className="suggest-card-article">
                                    <h3 className="title-suggest">
                                        {r['title']}
                                    </h3>
                                    <p className="description-suggest">
                                        {r['description']}
                                    </p>
                                    <div className="read-more-suggest">read more </div>
                                </div>
                            </div>
                        })}

                    </div></>}
            </div>
        );



    }
}