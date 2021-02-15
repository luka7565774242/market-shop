var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

    app.set("view engine","ejs");
    app.use(express.static("public"));
    app.use(express.static("Images"));

    



    app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req,res){
    res.render("page1");
});

app.get("/page1",function(req,res){
    res.render("page1");
});

app.get("/info1",function(req,res){
    res.render("info1");
});
app.get("/info2",function(req,res){
    res.render("info2");
});
app.get("/info3",function(req,res){
    res.render("info3");
});
app.get("/info4",function(req,res){
    res.render("info4");
});
app.get("/info5",function(req,res){
    res.render("info5");
});
app.get("/info6",function(req,res){
    res.render("info6");
});

app.get("/signup",function(req,res){
    res.render("signup");
});

app.get("/login",function(req,res){
    res.render("login");
});
app.get("/contact",function(req,res){
    res.render("contact");
});
app.get("/page2",function(req,res){
    res.render("page2");
});
app.get("/page3",function(req,res){
    res.render("page3");
});
app.get("/adminpanel",function(req,res){
    res.render("adminpanel");
});

app.get("/page1/contact",function(req,res){
    res.render("contact");
});

app.get("/page1/signup",function(req,res){
    res.render("signup");
});

app.get("/page1/login",function(req,res){
    res.render("login");

});


app.get("/adminpage2",function(req,res){
    res.render("adminpage2");
    
});

app.get("/adminpage2/adminpanel",function(req,res){
    res.render("adminpanel");
    
});


app.listen(3000,function(){
    console.log("server started");
});