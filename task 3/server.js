var data=[];
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));


const homeStartingContent = "This form should accept the name of the student, the student’s scores in Maths and English.Once the above details are entered and the submit button is clicked, the form shouldredirect to a page where it displays the list of all the students with their details sorted on the basis of their average score.";

app.get('/', function(req, res) {
  res.render('home', {homeStartingContent:homeStartingContent});

});

app.get('/result', function(req, res) {
  data.sort(function(a, b) {
    return parseFloat(a.average) - parseFloat(b.average);
});
console.log(data);
  res.render('result', {data:data});

});


app.post('/', function(req, res) {

  const StudentData = {
    fullName: req.body.fullName,
    mathMarks: req.body.mathMarks,
    englishMarks: req.body.englishMarks,
    average: (parseInt(req.body.englishMarks)+parseInt(req.body.mathMarks))/2,
  };
  data.push(StudentData);

  res.redirect('/result');
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
