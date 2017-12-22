var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var list = [1, true, 'free'];
list[1] = 100;
list[2] = 100;
list[3] = 'sss';
console.log(list.length);
list[0] = {};
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var obj = { size: 10, label: 'size' };
printLabel(obj);
var a = [1, 2, 3, 5];
var b = a;
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('beep beep');
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('tick tock');
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
digital.tick();
analog.tick();
var d = new DigitalClock(11, 11);
d.tick();
console.log('——————————————————————————————————x____________________');
var Control = (function () {
    function Control() {
        this.state = 12345;
        this.pro = 'p';
    }
    Control.prototype.sup = function () {
        console.log(this.state);
    };
    return Control;
}());
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () {
        console.log(this.pro);
    };
    Button.prototype.sub = function () {
        console.log('lalala');
        this.sup();
        console.log('lalala');
    };
    return Button;
}(Control));
var TextBox = (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.fn2 = function () {
        console.log(this.pro);
    };
    return TextBox;
}(Control));
var btn = new Button();
btn.select();
btn.sup();
btn.sub();
// const tb = new TextBox()
// tb.fn2() 
