let list: any[] = [1, true, 'free']
list[1] = 100
list[2] = 100
list[3] = 'sss'
console.log(list.length)
list[0] = {}

interface LabelledValue {
  label: string
}
function printLabel (labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let obj = { size: 10, label: 'size' }
printLabel(obj)

const a: number[] = [1, 2, 3, 5]
const b: ReadonlyArray<number> = a

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}
interface ClockInterface {
  tick()
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}
class DigitalClock implements ClockInterface {
  constructor (h: number, m: number) {}
  tick () {
    console.log('beep beep');
  }
}
class AnalogClock implements ClockInterface {
  constructor (h: number, m: number) {}
  tick () {
    console.log('tick tock');
  }
}
const digital = createClock(DigitalClock, 12, 17)
const analog = createClock(AnalogClock, 7, 32)
digital.tick()
analog.tick()

const d = new DigitalClock(11, 11)
d.tick()

console.log('——————————————————————————————————x____________________');

class Control {
  private state: any = 12345
  protected pro: any = 'p'
  sup () {
    console.log(this.state)
  }
}
interface SelectableControl extends Control {
  select (): void;
}
class Button extends Control implements SelectableControl {
  select () {
    console.log(this.pro)
  }
  sub () {
    console.log('lalala')
    this.sup()
    console.log('lalala')
  }
}
class TextBox extends Control {
  fn2 () {
    console.log(this.pro)
  }
}

const btn = new Button()
btn.select()
btn.sup()
btn.sub()
// const tb = new TextBox()
// tb.fn2()