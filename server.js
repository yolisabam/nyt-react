const express = require("express"); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configuring body parser for AJAX request
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Serving up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
//Set up promises with mongoose
mongoose.Promise = global.Promise;
// connect to Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/groupnytreact",
  {
    useMongoClient:true
  }
);

app.listen(PORT, function(){
  console.log(`API Server now listening on PORT ${PORT}`)
});

