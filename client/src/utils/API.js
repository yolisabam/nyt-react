import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&sort-newest";
const APIKEY = "c3cde688433943d2833192aeb0574e2a";

export default {
  getArticles: function(query) {
    const topic =`&q=${query.topic}`;
    const start = `&begin_date=${query.start}`;
    const end = `&end_date=${query.end}`
    console.log(`${BASEURL}${topic}${start}${end}${APIKEY}`); 
    return axios.get(`${BASEURL}${topic}${start}${end}${APIKEY}`);
  },

  saveArticle:  function(articleData){
    return axios.post("/api/articles", articleData);
  },

  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  }
}