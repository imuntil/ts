/* 可辨识联合 */
interface Square {
  kind: 'square'
  size: number
}
interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}
interface Circle {
  kind: 'circle'
  radius: number
}

type Shape = Square | Rectangle | Circle

function area(s: Shape) {
  switch (s.kind) {
    case "square": return s.size * s.size;
    case "rectangle": return s.height * s.width;
    case "circle": return Math.PI * s.radius ** 2;
  }
}

const circle: Circle = {
  kind: 'circle',
  radius: 10
}
console.log(area(circle))

class BasicCalculator {
  constructor (protected value: number = 0) {}
  public currentValue (): number {
    return this.value
  }
  public add (operand: number): this {
    this.value += operand
    return this
  }
}

let v = new BasicCalculator(1).add(1).add(2)
console.log(v)

class ScientficCalculator extends BasicCalculator {
  constructor (value = 0) {
    super(value)
  }
  public sin() {
    this.value = Math.sin(this.value)
    return this
  }
}