"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParseIntBasedZipCodeValidator = (function () {
    function ParseIntBasedZipCodeValidator() {
    }
    ParseIntBasedZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && parseInt(s).toString() === s;
    };
    return ParseIntBasedZipCodeValidator;
}());
exports.ParseIntBasedZipCodeValidator = ParseIntBasedZipCodeValidator;
var module_1 = require("./module");
exports.RegExpBasedZipCodeValidator = module_1.ZipCodeValidator;
