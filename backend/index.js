// youtube link : https://www.youtube.com/watch?v=jfZyqZycjmA&list=WL&index=3&t=810s&ab_channel=CodeWithYousaf

const express = require("express");

const app = express();

const cors = require('cors');
app.use(cors());


const multer = require('multer');
const path = require('path');

require("dotenv").config();
const port = process.env.PORT;


const UserModel = require('./models/Users.js');
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'public/images')
    },
    filename: (req,file,cb)=>{
        cb(null,file.filename+"_"+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({
    storage:storage
})

app.post('/upload',upload.single('file')  ,(req,res)=>{
    UserModel.create({imageName : req.file.filename});
    console.log(req.file);
    res.send("Hello");
})

app.get('/getImage' , (req,res)=>{
    console.log('5135');
    UserModel.find()
    .then(r=>{console.log(r)})
    .catch(e=>{console.log(e)})
    res.send("HEllo GGGG")
})


app.listen(port,()=>{
    console.log("Running!!!");
})


const db = require('./config/database.js');
db();