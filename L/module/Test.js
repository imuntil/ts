"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path='node.d.ts' />
/// <reference path='declarations.d.ts' />
/// <reference path='text.d.ts' />
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var URL = require("url");
var path = require("path");
var os = require("os");
var myUrl = URL.parse('http://www.baidu.com');
console.log(myUrl);
console.log(path.join('/ap', 'xx'));
console.log(os.type());
var v = new ZipCodeValidator_1.default();
console.log(v.isAcceptable('lalala'));
// import fileContent from './xyz.txt!text'
// console.log(fileContent); 
