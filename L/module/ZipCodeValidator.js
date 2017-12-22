"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
ZipCodeValidator.numberRegexp = /^\d+$/;
exports.default = ZipCodeValidator;
