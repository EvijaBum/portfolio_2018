var express = require("express");
var router  = express.Router();

//root route
router.get("/", function(req, res){
    res.render("landing");
});

// show about section
router.get("/about", function(req, res){
   res.render("about"); 
});

// show mywork section
router.get("/mywork", function(req, res){
   res.render("mywork"); 
});

// show contact section
router.get("/contact", function(req, res){
    res.render("contact"); 
});

module.exports = router;