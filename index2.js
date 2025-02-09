import express from "express";
import bodyParser from "body-parser"


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
 var today = new Date();
 const day = today.getDay();

 let type = "a weekday";
 let adv = "it's time to work hard";

 if (day === 0 || day === 6) {
   type = "the weekend";
   adv = "it's time to have some fun";
 }
 const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
 
 res.render("index.ejs",{
    dayType:type,
    advice:adv,
    data:data
 })
});

app.post("/submit",(req,res)=>{
  var numberOfLetters= req.body["fName"].length+req.body["lName"].length;
  res.render("form.ejs",
    { numberOfLetter: numberOfLetters })
});

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});