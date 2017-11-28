import React from "react";
import API from "../../Utils/API.js";

const DelButton = (props) => (
  <button className="btn btn-danger pull-right" onClick={() => {
    console.log(props.id)
    api.deleteArticle(props.id)
    .then(() => {
      props.getSaved();
    })
    }}>
    Remove
  </button>
)

export default DelButton