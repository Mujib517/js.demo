var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var bookCtrl = require('./controllers/book.ctrl');
var defaultCtrl = require('./controllers/default.ctrl');

app.listen(3000, function () {
    console.log("Server is running on 3000");
});

app.use(bodyParser.json());

//routes
//endpoint
app.get('/', defaultCtrl.get);
app.get('/health', defaultCtrl.health);
app.get('/books', bookCtrl.get);
app.get('/books/:id', bookCtrl.getById);
app.post('/books', bookCtrl.post);
app.delete('/books/:id', bookCtrl.remove);
app.put('/books/:id', bookCtrl.update);