import express from "express";
import bodyParser  from "body-parser";
import axios from "axios";
import apikey from "./secret.js";

// console.log(apikey);
const app = express();
const port = 3000;

const myApi = apikey;
// console.log(myApi);
let code = "us";
let headers ={
    'X-Api-Key': myApi,
};


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

const country = ['us', 'ca', 'fr', 'ru', ];


app.get("/", async (req, res) =>{
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${code}`, {headers});
        const data = response.data;
        res.render("index.ejs", {
            posts: data.articles,
        })
    } catch (error) {
        res.status(400).json({message: "Data not found"});
    }
    
})

app.get("/business", async(req, res) =>{
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${code}}&category=business`, {headers});
        const data = response.data;
        res.render("index.ejs", {
            posts: data.articles,
        })
    } catch (error) {
        res.status(400).json({message: "Data not found"});
    }
})

app.get("/science", async(req, res) =>{
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${code}&category=science`, {headers});
        const data = response.data;
        res.render("index.ejs", {
            posts: data.articles,
        })
    } catch (error) {
        res.status(400).json({message: "Data not found"});
    }
})

app.get("/technology", async(req, res) =>{
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${code}&category=technology`, {headers});
        const data = response.data;
        res.render("index.ejs", {
            posts: data.articles,
        })
    } catch (error) {
        res.status(400).json({message: "Data not found"});
    }
})

app.get("/sports", async(req, res) =>{
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${code}&category=sports`, {headers});
        const data = response.data;
        res.render("index.ejs", {
            posts: data.articles,
        })
    } catch (error) {
        res.status(400).json({message: "Data not found"});
    }
})

app.post("/country", (req, res) =>{
    const countryCode = req.body.country;
    code = countryCode.toLowerCase();
    if(req.body.country === ""){
        res.render("messageError.ejs");
    }
    
    
    res.redirect("/");
    
})

app.listen(port, () =>{
    console.log(`This server is running on port ${port}`);
})