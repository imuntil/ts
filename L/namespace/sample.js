///<reference path="Validation-p.ts"/>
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
///<reference path="Validation-p.ts"/>
var Validation;
(function (Validation) {
    var numberRegexp = /^\d+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
///<reference path="Validation-p.ts"/>
///<reference path="LettersOnlyValidator.ts"/>
///<reference path="ZipCodeValidator.ts"/>
var strings = ['hello', '12345', 'k93'];
var validators = {};
validators['zip code'] = new Validation.ZipCodeValidator();
validators['letter only'] = new Validation.LettersOnlyValidator();
console.log(validators['zip code'].isAcceptable(strings[1]));
console.log(validators['letter only'].isAcceptable(strings[1]));
