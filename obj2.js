//template
//pascal casing 
// Constructor function
// classes, Object.create
// this, bind, call, apply
// Asynchronous js

function Person() {
    this.pi=3.14;
    this.age = 20; //data

    this.dispaly = function () {
        console.log("age is ", this.age);
    }
}

Person.prototype.pi = 3.14;

function Mobile(color) {
    this.width = 5;
    this.height = 6;
    this.color = color;
}

Mobile.prototype.call = function (number) {
    console.log("calling", number);
}

var m1 = new Mobile("Black"); //12bytes
var m2 = new Mobile("Red");   // 12bytes
var m3 = new Mobile("Grey"); // 12 bytes


console.log(m2.call(2323232));
