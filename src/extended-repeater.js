const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let text = String(str);
  let repeatTimes = options.repeatTimes;
  let separator = options.repeatTimes;
  let addition = String(options.addition);
  let addRepTimes = options.additionRepeatTimes;
  let addSep = options.additionSeparator;
  let result;
  let addResult;

  for (let i = 0; i < repeatTimes; i++) {
    result = result + text;
    for (let j = 0; j < addRepTimes; j++) {
      addResult = addResult + addition + addSep;
    }
    result = result + addResult;
    result = result + separator;
  }

  return result;
};
