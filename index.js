var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const bookRouter = require('./routes/book.router');
const defaultRouter = require('./routes/default.router');

app.listen(3000, function () {
    console.log("Server is running on 3000");
});

app.use(bodyParser.json());

//routes
//endpoint
app.use('/', defaultRouter);
app.use('/api/books', bookRouter); //register routes
