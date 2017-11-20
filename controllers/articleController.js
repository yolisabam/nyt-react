const db = require("../models");

module.exports = {
  searchAll: function(req,res){
    db.Article
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  create: function(req,res){
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req,res){
    db.Article
      .findbyId({_id:req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};