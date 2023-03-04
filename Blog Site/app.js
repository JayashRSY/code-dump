const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const blogContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nesciunt alias omnis, voluptatem modi animi recusandae obcaecati aspernatur saepe quibusdam.";
const allPosts = [];

// Home Page
app.get("/", function(req, res) {
    
    console.log("dawwda");
    res.render("home", {
        blogContent: blogContent,
        allPosts: allPosts});
    // console.log(allPosts[0]);
});

// Compose Post
app.get("/compose", function(req, res) {
    res.render("compose", {blogContent: blogContent});
});

// About Page
app.get("/about", function(req, res) {
    res.render("about", {blogContent: blogContent});
});

// Contact Page
app.get("/contact", function(req, res) {
    res.render("contact", {blogContent: blogContent});
});

// Post Request from Compose Page
app.post("/compose", function(req, res) {
    const postData = {
        postTitle: req.body.postTitle,
        postContent: req.body.postContent
    };
    allPosts.push(postData);
    res.redirect("/");
});

// Paramaeters page routes
app.get("/posts/:post1", function(req, res) {
    let requestedPostTitle = _.lowerCase(req.params.post1);
    
    allPosts.forEach(post => {
        let storedPostTitle = _.lowerCase(post.postTitle);

        if(requestedPostTitle === storedPostTitle) {
            res.render("post", {
                title: post.postTitle,
                content: post.postContent
            });
        }
    });
});

// Listening for Server
app.listen(3000, function() {
    console.log("Server is running on port: 3000...");
});