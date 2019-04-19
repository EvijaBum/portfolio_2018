var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");
    
var indexRoutes = require("./routes/index")    

// mongoose.connect("mongodb://localhost:27017/portfolio", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("BUNNY JUMPS!");
});