const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if (typeof(str) !== 'string') str = String(str);
  let result = str;
  if (options.hasOwnProperty('addition')) {
    let addStr = options.addition;
    if (typeof(addStr) !== 'string') addStr = String(addStr);
    let addResult = addStr;
    for (let i = 1; i < (options.additionRepeatTimes ? options.additionRepeatTimes: 1); i++){
      addResult = addResult + (options.additionSeparator ? options.additionSeparator : '|') + addStr
    }
    result = result + addResult
  }
  let buff = result
  for (i = 1; i < (options.repeatTimes ? options.repeatTimes : 1); i++){
    result = result + (options.separator ? options.separator : '+') + buff;
  }
return result;
}


module.exports = {
  repeater
};
