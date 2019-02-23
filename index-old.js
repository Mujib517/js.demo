//1. Single threaded
//2. Asynchronous
//3. Runs on server (spring boot) web services
//4. Rapid prototyping 
//5. modules 
// REST Represenational State Transfer: Concept
// RESTful 
// 6 Principles
// Uniform Interface, Stateless, Client Server, Cacheability, Layered System, Code on Demand (optional)
// Http verbs: GET, POST, PUT, DELETE, PATCH (partial updates)
// POST http://localhost:3000/books  {}
// .Net : asp.net web api 
// java: spring boot
// nodejs: ExpressJS
// Python: Flask

const http = require('http');
const fs = require('fs');

function handler(req, res) {
    switch (req.url) {
        case '/':
            const data = fs.readFileSync("index.html");
            res.write(data);
            break;

        case '/books':
            var books = [{ name: 'Speaking Javascript', price: 100, inStock: true },
            { name: 'Eloquent Javascript', price: 50, inStock: false },
            { name: 'Headfirst Javascript', price: 80, inStock: true }];

            res.write(JSON.stringify(books));
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



