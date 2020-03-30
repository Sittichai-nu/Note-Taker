var express = require("express");

// creating an "express" server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// "starts" server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
