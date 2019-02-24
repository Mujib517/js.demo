var books = [{ id: 1, name: 'Speaking Javascript', price: 100, inStock: true },
{ id: 2, name: 'Eloquent Javascript', price: 50, inStock: false },
{ id: 3, name: 'Headfirst Javascript', price: 80, inStock: true }];
//CRUD
var bookCtrl = {
    get: function (req, res) {
        res.status(200);
        res.json(books);
    },

    getById: function (req, res) {
        var id = req.params.id;
        var bk;
        for (var i = 0; i < books.length; i++) {
            if (books[i].id == id) bk = books[i];
        }

        res.status(200);
        res.json(bk);
    },

    post: function (req, res) {
        var book = req.body;
        books.push(book);

        res.status(201);
        res.json(book);
    }
};


module.exports = bookCtrl;
