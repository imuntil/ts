export default class ZipCodeValidator {
  static numberRegexp = /^\d+$/
  isAcceptable(s: string) {
    return s.length === 5 && ZipCodeValidator.numberRegexp.test(s)
  }
}