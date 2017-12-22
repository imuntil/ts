///<reference path="Validation-p.ts"/>
namespace Validation {
  const numberRegexp = /^\d+$/
  export class ZipCodeValidator implements StringValidator {
    isAcceptable (s: string) {
      return s.length === 5 && numberRegexp.test(s)
    }
  }
}
