//class
//arrow function or lamda 
// this inside arrow
// const,let
// var is function scoped. let block scoped
// string interpolation

var age = 10;
var name = "John";

// var msg = name + " is " + age + " years old";
var msg= `${name} is ${age} years old`;
console.log(msg);


// var mobile = {
//     name: "Mobile",

//     call: function () {

//         var init = () => console.log(this.name);

//         init();
//     }
// };

// mobile.call();



// function add(a, b) {
//     a++;
//     b++;
//     a += 10;
//     return a + b;
// }

// (a, b) => a + b;

// function fn(a) {
//     return a + 10;
// }

// a => a + 10;

// () => console.log("hello");


// class Mobile {

//     constructor() {

//         this.width = 10;
//         this.height=20;
//     }

//     call() {

//     }
// }