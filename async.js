// Javascript loosely typed
// Javascript single threaded
// Race conditions and dead locks

//Synchronous X Asynchronous
// delay 1sec 100ms
// DB operations, File IO, Web svc api, Timers

// JS RE
// Single Threaded
// Async
// Server side apps (api, websites)
//1sec
// 2hrs
for (var i = 0; i < 100000000000; i++) {
    ///kadjfkadjfkjakdf
    setTimeout(function () { console.log(i) }, 0);
}


//select * from students   2sec
// 


// entity 1
function fnAsync(a, b, cb) {
    //0.01s
    console.log("execution Started");

    //3sec
    setTimeout(function () {
        console.log("calculation started");
        a++;
        b++;
        a = a + b;
        console.log("calculation finished");

        var c = a + b;
        cb(c);
    }, 3000);

    //0.01s
    console.log("execution stopped");
}

//entity 2

function callback(res) {
    console.log(res);
}
fnAsync(10, 20, callback);


// creditcard 5sec  freezed

// function fn(a, b) {
//     a++;
//     b++;
//     a = a + b;

//     return a + b;
// }

// var res=fn(10,20);
// console.log(res);