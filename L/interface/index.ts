interface ClockInterface {
  tick ();
}
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}
// class Clock implements ClockConstructor {
//   currentTime: Date
//   constructor (h: number, m: number) {}
// }

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) {
    console.log(start)
   };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

interface ISquareConfig {
  color?: string,
  width?: number,
  [prop: string]: any
}
let squareConfig = { colour: 'red', width: 100 }
function createSquare(config: ISquareConfig): { color: string; area: number } {
  return {
    color: 'red',
    area: 1000
  }
}
let mySquare = createSquare(squareConfig)
const square = createSquare({ color: 'block', width: 20 })
const squareConfig2 = { a: '1', b: 2, width: 200 }
const s2 = createSquare(squareConfig2)


function func(...args): number {
  return args.length
}

func(123.3,3,4,5)

interface IT {
  [index: number]: string
}
const array: IT = ['a', '2']
interface IT2 {
  (a: string, b: string): string
}

const it2: IT2 = function(a, b) {
  return a + b
}

class A {
  a: string = 'a'
  b: number = 1
  c () {
    return this.a + this.b
  }
}
const aa: A = new A()
console.log(aa.c())

interface IAA extends A {
  d: string
}

class DD implements IAA {
  d: string = 'd'
  a: string = 'a'
  b: number = 2
  c () {
    return '4'
  }
}