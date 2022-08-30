let fs = require("fs");
let express = require("express");
const path = require("path"); 
let exp= express();
exp.get("/EnterName.html",function(req,res){
    fs.appendFile("Text.txt",`\n${req.query.name}`,function(err){
        if(err)return err;
    });
    res.sendFile(path.join(__dirname,"EnterName.html"));
});
exp.get("/DisNames.html",function(req,res){
    fs.readFile("Text.txt",function(err,data){
        if (err) return err;
        res.sendFile(path.join(__dirname,"Text.txt"));
    });
});

exp.listen(8000,function(){
    console.log("Server is running at http://localhost:8000/EnterName.html");
})