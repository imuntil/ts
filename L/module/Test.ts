/// <reference path='node.d.ts' />
/// <reference path='declarations.d.ts' />
/// <reference path='text.d.ts' />
import Validator from './ZipCodeValidator'
import * as URL from 'url'
import path = require('path')
import * as os from 'os'

const myUrl = URL.parse('http://www.baidu.com')
console.log(myUrl);
console.log(path.join('/ap', 'xx'));
console.log(os.type());

const v = new Validator()
console.log(v.isAcceptable('lalala'))

// import fileContent from './xyz.txt!text'
// console.log(fileContent);