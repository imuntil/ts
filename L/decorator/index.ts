function classDecorator<T extends {new (...args: any[]): {}}> (constructor: T) {
  return class extends constructor {
    newProperty = 'new property'
    hello = 'override'
  }
}
@classDecorator
class Greeter {
  property = 'property'
  hello: string
  constructor (m: string) {
    this.hello = m
  }
}

console.log(new Greeter('world')) 

let x: [number, string]
x = [2, 's']
x[2] = 2

let y: [number, string, string]
y = [1, 's', 's']

enum Days {
  Sun, Mon, Tue, Web, Thu, Fri, Sat
}