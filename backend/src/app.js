let express=require("express");
let app=express();
const cors = require("cors");
require("dotenv").config();
let bodyParser=require("body-parser");
let db=require("../db.js");
let router=require("./routes/route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,                
}));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router);


module.exports=app;