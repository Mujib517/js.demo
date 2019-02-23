var express = require('express');
var app = express();
var bookCtrl = require('./controllers/book.ctrl');
var defaultCtrl = require('./controllers/default.ctrl');

app.listen(3000, function () {
    console.log("Server is running on 3000");
});

//routes
//endpoint
app.get('/', defaultCtrl.get);
app.get('/health', defaultCtrl.health);
app.get('/books', bookCtrl.get);
