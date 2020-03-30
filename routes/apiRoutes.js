

var db = require("../db/db.json");

const fs = require("fs");



module.exports = function (app) {

  app.get('/api/notes', function (req, res) {
    res.json(db);
  });


  app.post('/api/notes/', function (req, res) {
    
});

  app.delete("api/notes/:id"), function (req, res) {
    

  
}
};
