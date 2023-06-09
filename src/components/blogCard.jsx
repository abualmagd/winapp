import { useNavigate } from "react-router-dom";
import "../styles/blog.css";
import { dateFormat } from "../services/global";

export default function BlogCard(props) {

    const article = props.article;

    const navigat = useNavigate();
    const url = "/blog/" + article['id'];

    return (
        <>
            <div className="my-article" onClick={() => navigat(url)}>
                <img src={article['image_url']} alt="" className="my-image" />
                <div className="my-article-details">
                    <div className="creat-at">
                        {dateFormat(article['created_at'])}
                    </div>
                    <h1 className="title-article">
                        {article['title']}
                    </h1>
                    <p className="description-article">
                        {article['description']}
                    </p>
                </div>
            </div>

        </>
    );
}