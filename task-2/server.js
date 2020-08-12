const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
var getUrl = function(category) {
    return "https://sv443.net/jokeapi/v2/joke/" + category+"?type=single";
}


app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    console.log(req.body.category);
    category=req.body.category;
    url=getUrl(category);
    request(url,function(error,response,body){
        body=JSON.parse(body);
        console.log(body);
        res.write('<h1> Category </h1>'+'<p>'+body.category+'</p>');
        res.write('<h1> Joke </h1>'+'<p>'+body.joke+'</p>');
        res.write('<h1> Id </h1>'+'<p>'+body.id+'</p>');
        res.send();

  });


});
app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});
