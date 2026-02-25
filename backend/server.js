const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
 destination: function(req,file,cb){
  cb(null,"uploads/");
 },
 filename: function(req,file,cb){
  cb(null,file.originalname);
 }
});

const upload = multer({storage:storage});

app.post("/upload",upload.single("file"),(req,res)=>{
 res.send("File uploaded");
});

app.listen(3000,()=>{
 console.log("Server running on port 3000");
});
