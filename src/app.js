const path = require("path");
const express = require("express");
//const hbs = require("hbs");
const app = express();

let absPath = path.join(__dirname,"../");
let viewsPath = path.join(__dirname,"../templates/views");
let partialPath = path.join(__dirname,"../templates/partials");
app.use(express.static(absPath));

//app.set("view engine","hbs");
//app.set("views",viewsPath);
//hbs.registerPartials(partialPath);
/*
app.get('',(req,res)=>{
    res.render("index",{title:"Welcome Page","content":"Welcome Page Content"});
})

app.get('/about',(req,res)=>{
    res.render("about",{title:"About Page","content":"About Content"});
})

app.get('/forecast',(req,res)=>{
    res.send({location:"India",forcast:"rain 24 hours"});
})

app.get('/help',(req,res)=>{
    res.render("help",{title:"Help Page","content":"Help Content"});
})

app.get('/help/*',(req,res)=>{
    res.render("about",{title:"Help Page","content":"Page Not Available in help"});
})

app.get('*',(req,res)=>{
    res.render("error",{title:"404 Page","content":"Page Not Found"});
})
*/
app.listen(8080,()=>{
    console.log("Server started on 8080");
});