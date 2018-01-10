class A1 {
  a: string
  constructor (a: string) {
    this.a = a
  }
  speak (w: string) {
    console.log(w)
  }
}
class A2 extends A1 {
  b: number
  constructor (a: string, b: number) {
    super(a)
    this.b = b
  }
  speak (w: string) {
    console.log('xxxxxxxxxxxxxxxx')
  }
}

const A3: typeof A2 = A2
const a3 = new A3('a', 2)
a3.speak('a')