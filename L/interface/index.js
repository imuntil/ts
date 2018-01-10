function getCounter() {
    var counter = function (start) {
        console.log(start);
    };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var squareConfig = { colour: 'red', width: 100 };
function createSquare(config) {
    return {
        color: 'red',
        area: 1000
    };
}
var mySquare = createSquare(squareConfig);
var square = createSquare({ color: 'block', width: 20 });
var squareConfig2 = { a: '1', b: 2, width: 200 };
var s2 = createSquare(squareConfig2);
function func() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.length;
}
func(123.3, 3, 4, 5);
var array = ['a', '2'];
var it2 = function (a, b) {
    return a + b;
};
var A = /** @class */ (function () {
    function A() {
        this.a = 'a';
        this.b = 1;
    }
    A.prototype.c = function () {
        return this.a + this.b;
    };
    return A;
}());
var aa = new A();
console.log(aa.c());
