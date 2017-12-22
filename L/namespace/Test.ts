///<reference path="Validation-p.ts"/>
///<reference path="LettersOnlyValidator.ts"/>
///<reference path="ZipCodeValidator.ts"/>

const strings = ['hello', '12345', 'k93']
const validators: { [s: string]: Validation.StringValidator } = {}
validators['zip code'] = new Validation.ZipCodeValidator()
validators['letter only'] = new Validation.LettersOnlyValidator()

console.log(validators['zip code'].isAcceptable(strings[1]));
console.log(validators['letter only'].isAcceptable(strings[1]));