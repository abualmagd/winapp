import { Link, useNavigate } from "react-router-dom";
import "../styles/blog.css";
import BlogCard from "../components/blogCard";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
import { getArticles } from "../services/blogServices";
import { dateFormat, myUrl } from "../services/global";
import { PageMetaTags } from "../components/myMetTage";


const MyBlog = () => {

    const [state, updateState] = useState('loading');
    const [articles, updateArticles] = useState();

    const url = myUrl + '/blog';

    const fetchArticles = useCallback(async () => {

        const { data, error } = await getArticles();

        if (error) {
            updateState('error');
            console.log(error.message);
        } else {
            console.log(data)
            updateArticles(data);
            updateState('data');
            localStorage.setItem('myAarticles', JSON.stringify(data));
        }
    }, []);

    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    const navigat = useNavigate();


    if (state === 'loading') {

        return <div>
            <div className="blog-wrap" >
                <div className="centerCircular">
                    <FontAwesomeIcon icon={faSpinner} spin size="lg" />
                </div>
            </div>
        </div>
    }

    if (state === 'error') {
        return <div>
            <div className="blog-wrap" >
                <div className="centerCircular">
                    <p className="error">
                        Sorry something error happened,

                    </p>
                </div>
            </div>
        </div>
    }
    if (articles.length === 0) {
        return <div className="blog-wrap">
            <div className="blog-bar">
                <div className="logom" >
                    <img src="/assets/images/logo512.png" alt="W" />
                    SoluTrend </div>
                <div className="navigation-blog">
                    <Link to={'/'}>
                        About
                    </Link>
                </div>
            </div>
            <div className="centerCircular">
                <div>no articles now
                    , Coming soon ... </div>
            </div>

        </div>
    }

    const pinnedArticle = articles[0];
    const articlesList = articles.map((r, index) => {
        if (index === 0) {
            return '';
        }
        return <BlogCard key={index} article={r} />
    });

    return (
        <div className="blog-wrap">
            <PageMetaTags title={'solutrend blog'}
                description={'articles about the best softwares , compare between apps '} url={url} />
            <div className="blog-bar">
                <div className="logom" >
                    <img src="/assets/images/logo512.png" alt="W" />
                    SoluTrend </div>
                <div className="navigation-blog">
                    <Link to={'/'}>
                        About
                    </Link>
                </div>
            </div>

            <div className="main-article" onClick={() => navigat('/blog/' + pinnedArticle['short_title'])}>
                <img src={pinnedArticle['image_url']} alt="" className="main-image" />
                <div className="article-details">
                    <div className="creat-at">
                        {dateFormat(pinnedArticle['created_at'])}
                    </div>
                    <h1 className="title-main-article">
                        {pinnedArticle['title']}
                    </h1>
                    <p className="description-main-article">
                        {pinnedArticle['description']}
                    </p>
                </div>
            </div>
            <div className="grid-articles">
                {articlesList}
            </div>
        </div>

    );

}



export default MyBlog;