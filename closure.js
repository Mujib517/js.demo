// closure
// 1. fu 2. inner fn 3. inner fn accessess outerfn 4. return inner fn

function fn(x) {

    return function fn2(y) {
        x = x + y;
        return function fn3() {
            console.log(y + 100);
        }
    }
}

// var fn2= fn(10);
// fn2();

fn(10)(20)();