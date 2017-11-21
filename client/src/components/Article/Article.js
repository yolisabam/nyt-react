import React from "react";
import saveArticle from "../../utils/API";


 const Article = props => (
  <div className ="well well-lg">
   <h4>{props.title}</h4>
   <p>{props.created_at}</p>
   <a href={props.link} target><button className="btn btn-primary pull-right">View Article</button></a> 
   <button className="btn btn-primary pull-right" onClick={() => api.saveArticle(props)}>Save</button> 
  </div>
);

export default Article;

