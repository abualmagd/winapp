
import { useParams,  useNavigate } from "react-router-dom";
import { ShareButtons, SharerIcon } from "../components/shareButtons";
import "../styles/article.css";
import {  getArticleWithAuthor, getRandomArticles } from "../services/blogServices";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { dateFormat, myUrl } from "../services/global";
import { PageMetaTags } from "../components/myMetTage";
import { Helmet } from "react-helmet-async";
import { SimpleSubscribe } from "./subscribe";
import { articleJsonld } from "../services/jsonld";
import { useQuery } from "react-query";
import AppBar from "../components/appBar";
import MyFooter from "../components/footer";
export default function Article() {

    const { title } = useParams(); //short title 
    const navigat = useNavigate();

    const {isError,isLoading,data}=useQuery({queryKey:['articles',title],queryFn:()=>getArticleWithAuthor(title)})

   const {data:suggestions}=useQuery({queryKey:['suggestions',title],queryFn:()=>getRandomArticles(title),enabled:!!data})


   //console.log(suggestions['data'])
    const url = myUrl + 'blog/' + title;


   



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {

        return <div>
            <div className="article-page" >
                <div className="centerCircular">
                    <FontAwesomeIcon icon={faSpinner} spin size="lg" />
                </div>
            </div>
        </div>
    }

    if (isError) {
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

        if(data.data!==null){

        const article=data.data[0];     
        const html = article['body'];
        const imagesource = article['image_source'];
        const jsonLd = articleJsonld(article);
        const writter={
            "@context": "https://schema.org",
            "@type": "Person",
            "name": article['author_name'],
            "url": " ",
            "image": article['author_image_url'],
            "description": article['author_description']
          };
        return (
            <div className="main">
  
            <AppBar/>
            <div className="dividerz" style={{height:"65px"}}>

            </div>
          
            <div className="article-page">
        
                <PageMetaTags description={article['description']} title={article['title']} url={url}
                    imageUrl={article['image_url']} type={'article'} jsonld={jsonLd} />
                <Helmet>
                    <meta property="article:author" content={writter} />
                    <meta property="article:published_time" content={dateFormat(article['created_at'])} />
                </Helmet>
            
                <h2 className="article-title-page">
                    {article['title']}
                </h2>
                <h1 className="description-article-page">
                    {article['description']}
                </h1>
                <div className="creat-at" style={{ display: "flex" }}>
                    {dateFormat(article['created_at'])}
                    <SharerIcon url={url} description={article['description']} title={article['title']} />
                </div>
                <img src={article['image_url']} alt={article['description']} className="article-image-page" />
                <div className="image-source" dangerouslySetInnerHTML={{ __html: imagesource }}></div>
                <div className="article-content-page" dangerouslySetInnerHTML={{ __html: html }}>
                </div>
                {article['author_id']&&<div className="writer-section">
                    <p>written by </p>
                    <div className="logo">
                    <img src={article['author_image_url']} alt={article['author_description']} className=""/> 
                    <div className="author-data">
                        <h5 className="author-name">
                            {article['author_name']} 
                            </h5> 
                         <p className="author-description">{article['author_description']} </p>
                    </div>
                  
                    </div>
                    
                </div>
                }

                <ShareButtons url={url} description={article['description']} title={article['title']} image={article['image_url']} />

                {suggestions && <><div className="recent-posts">Discover more</div>
                    <div className="suggestion-wraper">
                        {suggestions['data'].map((r, index) => {
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
            <div className="dividerz" style={{height:"125px"}}>

        </div>
        <MyFooter />
              </div>
        );



    }
}
return <></>;
}




