const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
    const posts = JSON.parse(fs.readFileSync('posts.json', 'utf-8'));

    const post = req.body;
    post.id = Math.floor(Math.random() * 100000);

    posts.push(post);
    fs.writeFileSync('posts.json', JSON.stringify(posts, null, 4));

    res.status(201).json({
        status: "success",
        message: "Post created successfully",
        post
    })
});

app.get('/', (req, res) => {
    const posts = JSON.parse(fs.readFileSync('posts.json', 'utf-8'));

    console.log(req.headers);

    // res.status(403).json({
    //     status: "failed",
    //     message: "Access Denied"
    // })

    res.status(200).json({
        status: "success",
        message: "Posts",
        data: posts
    })
});

app.delete('/', (req, res) => {
    fs.writeFileSync('posts.json', JSON.stringify([], null, 4));

    res.status(204).json({
        status: "success",
        message: "Posts deleted"
    })
});

app.listen(3000, console.log("server started"));