function DefaultCtrl() {

    this.get = function (req, res) {
        res.send("Hello Express");
    }

    this.health = function (req, res) {
        var obj = {
            status: 'Up'
        };

        res.json(obj);
    }
}
module.exports = new DefaultCtrl();

// var defaultCtrl = new DefaultCtrl();
// module.exports = defaultCtrl;