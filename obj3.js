//1. Object literals
//2. Constructor function
//3. Object.create
// Strict Mode vs Sloppy Mode

// W3C 
// ECMAScript 
// for in, const 
//ES4, ES5, ES6, ES7
// 'use strict';

//  var x = 100;


//  function fn(a,b,a){
//      console.log(a);
//  }

// prototype inheritance
//Object
var baseMobile = {
    call: function () {
        console.log("Calling...");
    }
};


var mobile = Object.create(baseMobile, {
    width: { value: 5, writable: false, enumerable: true, configurable: true },
    height: { value: 6, enumerable: true },
});

mobile.call=function(){
    console.log("Inside mobile child object");
}


mobile.call();

// mobile.width=100;

// console.log(mobile);
// Object.defineProperty(mobile, "width", { writable: true });

// mobile.width=100;

// console.log(mobile);


// for (var key in mobile) {
//     console.log(key);
// }