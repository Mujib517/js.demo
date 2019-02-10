var mobile = {

    id: 'mobile',

    display: function (x, y) {
        console.log(this, x, y);
    }
};

//1. refers to the object 
//2. refers to global object
//3. Inner function refer to its parent functions reference

var rect = {
    id: 'Rect'
};

var sq = {
    id: "square"
};

// mobile.display();//mobile
// var fn = mobile.display;
// fn(); //global

mobile.display.call(rect,10,20); //rect
mobile.display.apply(sq,[10,20]); //square

var fn=mobile.display.bind(sq,10,20); //new function this context fixed
fn();

mobile.display();