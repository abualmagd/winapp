
import { useParams,  useNavigate } from "react-router-dom";
import { ShareButtons, SharerIcon } from "../components/shareButtons";
import "../styles/article.css";
import { getArticleByShortTitle, getRandomArticles } from "../services/blogServices";
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

    const {isError,isLoading,data}=useQuery({queryKey:['articles',title],queryFn:()=>getArticleByShortTitle(title)})

   const {data:suggestions}=useQuery({queryKey:['suggestions',title],queryFn:()=>getRandomArticles(title),enabled:!!data})


   //console.log(suggestions['data'])
    const url = myUrl + 'blog/' + title;


   /* const injectStyle = (artcl) => {
        const styles = artcl['styles'];
        if (!styles) {
            console.log('no inject style');
        } else {


            // Create a new style element
            const style = document.createElement('style');


            // Add styles to the style element
            style.innerHTML = styles;

            // Insert the style element into the head section of the document
            document.head.appendChild(style);

            // Remove the style element when the component unmounts
            return () => {
                document.head.removeChild(style);
            };
        }
    }*/


 window.scrollTo(0, 0);




    useEffect(() => {
       
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

        const article=data['data'][0];
        
        const html = article['body'];
        const imagesource = article['image_source'];
        const jsonLd = articleJsonld(article);
        return (
            <div className="main">
  
            <AppBar/>
            <div className="dividerz" style={{height:"65px"}}>

            </div>
          
            <div className="article-page">
        
                <PageMetaTags description={article['description']} title={article['title']} url={url}
                    imageUrl={article['image_url']} type={'article'} jsonld={jsonLd} />
                <Helmet>
                    <meta property="article:author" content={article['writer']} />
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




