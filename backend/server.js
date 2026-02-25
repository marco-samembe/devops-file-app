const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/files",
express.static("uploads"));

const storage =
multer.diskStorage({

destination:function(req,file,cb){
cb(null,"uploads/");
},

filename:function(req,file,cb){
cb(null,file.originalname);
}

});

const upload =
multer({storage:storage});

app.post("/upload",
upload.single("file"),
(req,res)=>{

res.json({
message:"Uploaded",
file:req.file.filename
});

});

app.listen(3000,()=>{

console.log("Running 3000");

});