import { Link, useNavigate } from "react-router-dom";
import "../styles/blog.css";
import BlogCard from "../components/blogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getArticles } from "../services/blogServices";
import { dateFormat, myUrl } from "../services/global";
import { PageMetaTags } from "../components/myMetTage";
import { blogJsonld } from "../services/jsonld";
import { useQuery} from "react-query";
import AppBar from "../components/appBar";
import MyFooter from "../components/footer";


const MyBlog = () => {

    const {isError,isLoading,data}=useQuery({queryKey:'fetchArticles',queryFn:getArticles});



    
    const url = myUrl + '/blog';


   

    const navigat = useNavigate();


    if (isLoading) {

        return <div>
            <div className="blog-wrap" >
                <div className="centerCircular">
                    <FontAwesomeIcon icon={faSpinner} spin size="lg" />
                </div>
            </div>
        </div>
    }

    if (isError) {
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
    const articles=data['data']||[];
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
    const jsonLd = blogJsonld(articles);
    return (
        <div className="main">
            <AppBar/>
            <div className="dividerz" style={{height:"65px"}}>

            </div>
      
        <div className="blog-wrap">
            <PageMetaTags title={'solutrend blog'} jsonld={jsonLd}
                description={'articles about the best softwares , compare between softwares and recommended the best business software '} url={url} />
      
      
           

            <div className="main-article" onClick={() => navigat('/blog/' + pinnedArticle['short_title'])}>
                <img src={pinnedArticle['image_url']} alt={pinnedArticle['description']} className="main-image" />
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
        <div className="dividerz" style={{height:"125px"}}>

        </div>
        <MyFooter />
         </div>

    );

}



export default MyBlog;