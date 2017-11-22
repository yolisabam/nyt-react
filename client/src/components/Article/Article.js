import React from "react";
import API from "../../utils/API";


 const Article = props => (
  <div className ="well well-lg">
   <h4>{props.title}</h4>
   <p>{props.created_at}</p>
   <a href={props.link} target="_blank"><button className="btn btn-primary pull-right">View Article</button></a> 
   <button className="btn btn-primary pull-right" onClick={() => API.saveArticle(props)}>Save</button> 
  </div>
);

export default Article;

