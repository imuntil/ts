///<reference path="Validation-p.ts"/>
namespace Validation {
  const lettersRegexp = /^[A-z]+$/
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable (s: string) {
      return lettersRegexp.test(s)
    }
  }
}