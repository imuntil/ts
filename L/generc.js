function identity(arg) {
    return arg;
}
var myIdentity = identity;
console.log(myIdentity(10));
function loggingIdentity(arg) {
    return arg;
}
loggingIdentity([1, 2]);
loggingIdentity({ x: 100, length: 10 });
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
        // (<any>result)[id] = (<any>second)[id]
    }
    return result;
}
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger(name) {
        this.name = name;
    }
    ConsoleLogger.prototype.log = function () {
        console.log('...zzz');
    };
    return ConsoleLogger;
}());
var jim = extend(new Person('Jim'), new ConsoleLogger('jimmy'));
console.log(jim.name);
jim.log();
var B = (function () {
    function B() {
    }
    B.prototype.layEggs = function () {
        console.log('lay bird eggs');
    };
    B.prototype.fly = function () {
        console.log('fly');
    };
    return B;
}());
var F = (function () {
    function F() {
    }
    F.prototype.swim = function () {
        console.log('swim');
    };
    F.prototype.layEggs = function () {
        console.log('lay fish eggs');
    };
    return F;
}());
function getSmallPet() {
    return Math.random() > 0.5 ? new F() : new B();
}
var pet = getSmallPet();
pet.layEggs();
if (pet.swim) {
    pet.swim();
}
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
console.log('instanceof');
if (pet instanceof F) {
    pet.swim();
}
else {
    pet.fly();
}
var keys = 'sxx';
var value = 1;
console.log(keys);
console.log(value);
