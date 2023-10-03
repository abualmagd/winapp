import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useMutation } from "react-query";
import { postArticle, postArticleImage } from "../services/adminServices";
import "../styles/article.css";
import "../styles/addTool.css";
import AppBar from "../components/appBar";
import { useState } from "react";
import { createImageUrl } from "../services/filesServices";

export default function UploadArticle(){
    const [logoFile, setLogoFile] = useState(null);
    const [logoImage, setLogo] = useState(null);
    const [article,updateArticle]=useState({
        short_title:'', //slug 
        title:'',
        description:'',
        image_url:'', //image_url
        author_id:'',
        body:'',
        image_source:'',
        published:false,
    
    })



function clickLogo() {
    console.log('pressed2')
    return document.getElementById('logoImage').click();

}

const posting=useMutation({
    mutationFn:postArticle,

})


const handleInputChange=(event)=>{
    const { name, value } = event.target;
    updateArticle((prevArticle) => ({
        ...prevArticle,
        [name]: value,
      }));
}

const handleChange = (e) => {
        const fileList = e.target.files;
        console.log(fileList);
        const urlImg = URL.createObjectURL(fileList[0]);
        setLogoFile(fileList[0]);
        console.log(urlImg)
        setLogo(urlImg);
    
};



const postLogo = async () => {

    const { data, error } = await postArticleImage(logoFile);
    const imageData = data;
    if (error) {
        throw Error(error.message);
    } else {
        const { data } = createImageUrl('blog', imageData.path);

        console.log('hero image url : ', data.publicUrl);
        updateArticle({...article,image_url:data.publicUrl});
        return data.publicUrl; 
    }
}


const handleSubmit = (event) => {
    event.preventDefault();
    console.log(article);
   posting.mutate(article);
    console.log('posting ')
  };

    return (
        <div className="main">
            <AppBar />
      
        <div className="add-article">
            <form  className="add-article-form" id='form_id' onSubmit={handleSubmit}>

        
            <label>Slug:</label>
                    <input required name="short_title" value={article.short_title} onChange={handleInputChange} type="text" className="appName" placeholder="slug-use-in-url " />
        
         <label>title:</label>
                    <input required name="title" value={article.title} onChange={handleInputChange} type="text" className="appName" placeholder="article title " />

         <label >description :</label>
                    <textarea name="description" value={article.description} onChange={handleInputChange} id="#about"  cols="10" rows="6" placeholder="the description of the article"
                        required></textarea>
        <label >Author_id :</label>
        <input required name="author_id" value={article.author_id} onChange={handleInputChange} type="text" className="appName" placeholder="author id " />

        <label >body:</label>
                    <textarea name="body" value={article.body} onChange={handleInputChange} id="#about"  cols="10" rows="6" placeholder="the html body of article"
                        required></textarea>  
        <label>image source:</label>
                    <input  name="image_source" value={article.image_source} onChange={handleInputChange} type="text" className="appName" placeholder="the source of image" />

           {posting.isError&& <div className="error">
                {posting.error}
            </div>}
            <label htmlFor="checkadd" className="label-checkbox">
            <input type="checkbox" value={article.published}  className="checkbox-add" id="checkadd" />publish</label>
            {logoImage&& <img src={logoImage} alt="error" className="logo-image-shower" />}
                <div className="image-uploader">
                    <input type="file" name="avat" id="logoImage" onChange={(e)=>handleChange(e)} style={{display:"none"}} accept="image/*" />

                    <input type="button" id="onpress" onClick={clickLogo}
                        value="choose hero image" style={{ width: "140px", cursor: "pointer" }} />
                </div>
                <div className="submit-set" onClick={()=>postLogo()}>save image</div>
                {article.image_url&&<a href={article.image_url}>{article.image_url}</a>}

                {posting.isError&&<div className="error">{posting.error}</div>}
       
            {posting.isSuccess&& <div className="success">
                article posted successfully
            </div>
            }
                  {posting.isLoading? <div>
                       <div className="save">
                        <FontAwesomeIcon icon={faSpinner} spin />
                        </div> 
                    </div> : <input type="submit" className="save" value={'Save'} style={{ backgroundColor: " var(--btnbgColor)" }} />}
             
    </form>
        </div>
    
        
          </div>

    );
}