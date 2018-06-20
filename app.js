 express = require("express");
 var app = express();
 var bodyParser = require("body-parser")

 app.use(bodyParser.urlencoded({
     extended: true
 }));

 var friends = ["John", "Paul", "George"]

 app.set("view engine", "ejs");
 // ei saa DO reverse proxyt tööle muidu, läheb / kataloogist otsima neid views-i
 app.set('views', 'postapp/views');

 app.get("/postapp", function (req, res) {
     res.render("home");
     //  res.send("Works");
 });

 app.post("/postapp/addfriend", function (req, res) {
     var newFriend = req.body.newFriend;
     friends.push(newFriend);
     res.redirect("/postapp/friends");
     // get both KEY and VALUE
     //  Object.keys(req.body).forEach(function (k) {
     //      console.log(k + ' - ' + req.body[k]);
     //  });

     res.send("post route!");

 });

 app.get("/postapp/friends", function (req, res) {
     res.render("friends", {
         friends: friends
     });


 });

 app.listen(8003, "localhost", function () {
     console.log("postapp started!");
 });