//1. Single threaded
//2. Asynchronous
//3. Runs on server (spring boot) web services
//4. Rapid prototyping 
//5. modules 

const http = require('http');
const fs = require('fs');

function handler(req, res) {
    switch (req.url) {
        case '/':
            const data = fs.readFileSync("index.html");
            res.write(data);
            break;

        case '/books':
            res.write("List of books");
            break;

        case '/authors':
            res.write("List of authors");
            break;

        default:
            res.write("Not found");
            break;
    }
    res.end();
}

//asynchronous
const server = http.createServer(handler);

//asynchronous
server.listen(3000, () => console.log("server is running on port 3000"));



