function repeater(str, options) {
  let text = str;
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let addRepTimes = options.additionRepeatTimes;
  let addSep = options.additionSeparator;
  if (addition) {
    addRepTimes = 0;
    addition = "";
    addSep = "";
  }
  console.log(text, repeatTimes, separator, addition, addRepTimes, addSep);
  let result = "";
  let addResult;

  for (let i = 0; i < repeatTimes; i++) {
    result = result + text;
    result = result + addAddition(addition, addRepTimes, addSep);
    result = result + separator;
  }

  function addAddition(addition, additionRepeatTimes, additionSeparator) {
      if(addition === undefined) {
          return '';
      }
  }

  return result;
}

console.log(repeater("la", { repeatTimes: 3 }));
