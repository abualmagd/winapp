
import { useParams, Link, useNavigate } from "react-router-dom";
import { ShareButtons, SharerIcon } from "../components/shareButtons";
import "../styles/article.css";
import { useState } from "react";
import { getArticleByShortTitle, getRandomArticles } from "../services/blogServices";
import { useEffect } from "react";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { dateFormat, myUrl } from "../services/global";
import { PageMetaTags } from "../components/myMetTage";
import { Helmet } from "react-helmet-async";
import { SimpleSubscribe } from "./subscribe";
import { articleJsonld } from "../services/jsonld";

export default function Article() {

    const { title } = useParams(); //short title 
    const navigat = useNavigate();
    const [article, updateArticle] = useState();
    const [state, updateState] = useState('loading');
    const [suggestion, updateSuggestion] = useState();

    const url = myUrl + 'blog/' + title;

    const getSuggestions = useCallback(async () => {
        const { data } = await getRandomArticles(title);
        if (data) {
            updateSuggestion(data);
        }
    }, [title]);

    const injectStyle = (artcl) => {
        const styles = artcl['styles'];
        if (!styles) {
            console.log('no inject style');
        } else {


            // Create a new style element
            const style = document.createElement('style');

            // Set the type attribute to 'text/css'
            style.type = 'text/css';

            // Add styles to the style element
            style.innerHTML = styles;

            // Insert the style element into the head section of the document
            document.head.appendChild(style);

            // Remove the style element when the component unmounts
            return () => {
                document.head.removeChild(style);
            };
        }
    }

    const getArticle = useCallback(async () => {
        const { data, error } = await getArticleByShortTitle(title); // get article by short title 
        if (data) {
            updateArticle(data[0]);
            updateState('data');
            console.log('article js ', data);
            injectStyle(data[0]);
            getSuggestions(data[0]['id']);

        } else {
            updateState('error');
            console.log('errrrrrrr:', error.message);
        }
    }


        , [title, getSuggestions]);





    useEffect(() => {
        getArticle();
        window.scrollTo(0, 0);
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
        const imagesource = article['image_source'];
        const jsonLd = articleJsonld(article);
        return (
            <div className="article-page">
                <PageMetaTags description={article['description']} title={article['title']} url={url}
                    imageUrl={article['image_url']} type={'article'} jsonld={jsonLd} />
                <Helmet>
                    <meta property="article:author" content={article['writer']} />
                    <meta property="article:published_time" content={dateFormat(article['created_at'])} />
                </Helmet>
                <div className="blog-bar">
                    <div className="logom" onClick={() => navigat('/')} style={{ color: "gray" }}>
                        <img src="/assets/images/logo512.png" alt="solutrend logo find the best business software" />
                        SoluTrend </div>
                    <div className="navigation-blog">
                        <Link to={'/blog'} style={{ fontWeight: '500', color: "gray" }}>
                            blog
                        </Link>
                        <Link to={'/'} style={{ fontWeight: '500', color: "gray" }}>
                            home
                        </Link>
                    </div>
                </div>
                <h2 className="article-title-page">
                    {article['title']}
                </h2>
                <h1 className="description-article-page">
                    {article['description']}
                </h1>
                <p className="creat-at" style={{ display: "flex" }}>
                    {dateFormat(article['created_at'])}
                    <SharerIcon url={url} description={article['description']} title={article['title']} />
                </p>
                <img src={article['image_url']} alt={article['description']} className="article-image-page" />
                <div className="image-source" dangerouslySetInnerHTML={{ __html: imagesource }}></div>
                <div className="article-content-page" dangerouslySetInnerHTML={{ __html: html }}>

                </div>

                <ShareButtons url={url} description={article['description']} title={article['title']} image={article['image_url']} />

                {suggestion && <><div className="recent-posts">Discover more</div>
                    <div className="suggestion-wraper">
                        {suggestion.map((r, index) => {
                            const suggestUrl = '/blog/' + r['short_title'];
                            return <div className="suggestion-articles" key={index} onClick={() => navigat(suggestUrl)}>
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

                <SimpleSubscribe />
                <div style={{ height: "50px" }}>

                </div>

            </div>
        );



    }
}




