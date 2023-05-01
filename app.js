const express = require('express');
const app = express();
const postsRouter=require('./routes/posts.routes');

//url
app.use('/post', postsRouter);

module.exports=app;