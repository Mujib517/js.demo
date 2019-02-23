var bookCtrl = {
    get: function (req, res) {
        var books = [{ name: 'Speaking Javascript', price: 100, inStock: true },
        { name: 'Eloquent Javascript', price: 50, inStock: false },
        { name: 'Headfirst Javascript', price: 80, inStock: true }];

        res.json(books);
    }
};


module.exports = bookCtrl;
