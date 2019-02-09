//write less code do more
// refactoring
// 4 to 6
function add(a, b) {

    function calc(a) {
        var sum = 0;
        for (var i = 0; i < a.length; i++) {
            sum = sum + a[i];
        }
        return sum;
    }

    if (typeof a == 'function') a = a();
    if (typeof b === 'function') b = b();

    if (Array.isArray(a)) a = calc(a);
    if (Array.isArray(b)) b = calc(b);

    console.log(a + b);
}

add(10, 20);
add("Mujeeb", " Rahman");
add([1, 2, 3], [4, 5, 6]);
add(first, second);
add(true, false);

function first() {
    return 10;
}

function second() {
    return 200;
}
//higher order function

