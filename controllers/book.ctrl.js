var books = [{ id: 1, name: 'Speaking Javascript', price: 100, inStock: true },
{ id: 2, name: 'Eloquent Javascript', price: 50, inStock: false },
{ id: 3, name: 'Headfirst Javascript', price: 80, inStock: true }];
//CRUD
// Truthy and Falsy
// false, 0, null, undefined, "", NaN
var bookCtrl = {
    get: function (req, res) {
        res.status(200);
        res.json(books);
    },

    getById: function (req, res) {
        // var id = parseInt(req.params.id);
        var id = +req.params.id;
        var bk; //undefined

        for (var i = 0; i < books.length; i++) {
            if (books[i].id === id) bk = books[i];
        }
        // res.status(bk ? 200 : 404);
        // res.json(bk ? bk : "Not found");
        res.json(bk || "Not found");

        // if(bk){
        //     res.status(200);
        //     res.json(bk);
        // }
        // else{
        //     res.status(404);
        //     res.send("Not found");
        // }
    },

    post: function (req, res) {
        var book = req.body;
        books.push(book);

        res.status(201);
        res.json(book);
    },

    remove: function (req, res) {
        const id = +req.params.id;

        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                books.splice(i, 1);
            }
        }

        res.status(204);
        res.send();
    },

    update: function (req, res) {
        const id = +req.params.id;
        const bk = req.body;

        let bookToUpdate;

        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) bookToUpdate = books[i];
        }

        if (bookToUpdate) {
            bookToUpdate.inStock = bk.inStock;
            bookToUpdate.price = bk.price;
            bookToUpdate.name = bk.name;

            res.status(204);
            res.send();
        }
        else {
            res.status(404);
            res.send("Not found");
        }
    }
};


module.exports = bookCtrl;
