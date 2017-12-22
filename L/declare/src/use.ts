/// <reference path="./types/node.d.ts" />
/// <reference path="./types/global.d.ts" />
/// <reference path="./types/lodash.d.ts" />


import { Cat, CatSettings } from './m1'
import * as _ from 'lodash'
import * as URL from 'url'
import * as path from 'path'

const cat = new Cat(12)
cat.purr()
class MyCat extends Cat implements CatSettings {
	weight: number;
	name: string;
	constructor (n: number, weight: number, name: string) {
		super(n)
		this.weight = weight
		this.name = name
	}
	purr () {
		console.log('miaomiao')
	}
	info (): void {
		console.log(this.name, this.weight);
	}
}

const myCat: MyCat = new MyCat(1, 1.2, 'ninzya')
myCat.info()

console.log(_.join(['1',2, 'dk']));
console.log(_.isEmpty({}));
console.log(path.join('lala', 'lll'));

