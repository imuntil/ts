interface GenericIdentityFn<T> {
  (arg: T): T;
}
function identity<T> (arg: T): T {
  return arg;
}
let myIdentity: GenericIdentityFn<number> = identity
console.log(myIdentity(10))

interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise> (arg: T): T {
  return arg
}
loggingIdentity([1, 2])
loggingIdentity({ x: 100, length: 10 })

function extend<T, U> (first: T, second: U): T & U {
  let result = <T & U>{}
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id]
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id]
    }
    // (<any>result)[id] = (<any>second)[id]
  }
  return result
}

class Person {
  constructor (public name: string) {}
}
interface Loggable {
  log (): void
}
class ConsoleLogger implements Loggable {
  constructor (public name: string) {}
  log () {
    console.log('...zzz')
  }
}
const jim = extend(new Person('Jim'), new ConsoleLogger('jimmy'))
console.log(jim.name)
jim.log()

interface Bird {
  fly ();
  layEggs ();
}
interface Fish {
  swim ();
  layEggs ();
}
class B implements Bird {
  layEggs () {
    console.log('lay bird eggs')
  }
  fly () {
    console.log('fly');
  }
}
class F implements Fish {
  swim () {
    console.log('swim');
  }
  layEggs () {
    console.log('lay fish eggs');
  }
}
function getSmallPet (): Fish | Bird {
  return Math.random() > 0.5 ? new F() : new B()
}
const pet = getSmallPet()
pet.layEggs()
if ((<Fish>pet).swim) {
  (<Fish>pet).swim()
}

function isFish (pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}
if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

console.log('instanceof');
if (pet instanceof F) {
  pet.swim()
} else {
  pet.fly()
}

interface Map<T> {
  [key: string]: T;
}
let keys: keyof Map<boolean> = 'sxx'
let value: Map<number>['xx'] = 1
console.log(keys);
console.log(value);