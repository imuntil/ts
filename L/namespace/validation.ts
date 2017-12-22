namespace Validation {
  export interface StringValidator {
    isAcceptable (s: string): boolean;
  }
  const lettersRegexp = /^[A-z]+$/
  const numberRegexp = /^\d+$/
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable (s: string) {
      return lettersRegexp.test(s)
    }
  }
  export class ZipCodeValidator implements StringValidator {
    isAcceptable (s: string) {
      return numberRegexp.test(s) && s.length === 5
    }
  }
}

const strings = ['hello', '98097', '39']

let validators: { [s: string]: Validation.StringValidator; } = {}
validators['ZIP code'] = new Validation.ZipCodeValidator()
validators['Letters only'] = new Validation.LettersOnlyValidator()

for (let s of strings) {
  for (let name in validators) {
    console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
  }
}

import Code = Validation.ZipCodeValidator
const v = new Code()
console.log(v.isAcceptable('123456'))