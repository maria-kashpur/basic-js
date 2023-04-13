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
  if (!options.separator) {
    options.separator = '+'
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  }
  
  let additionStr = ''
  if (!options.additionRepeatTimes || options.additionRepeatTimes <= 0) {
     options.addition ? additionStr = options.addition : additionStr = ''
  } else {
    additionStr = repeatStr(options.addition, options.additionRepeatTimes, options.additionSeparator)
  }

  if (!options.repeatTimes || options.repeatTimes <= 0) {
    return `${str}${additionStr}`
  }
  
  function repeatStr (str, num, separator) {
    let arr = []
    while(num > 0) {
      arr.push(`${str}`)
      num --
    }
    return arr.join(separator)
  }
  
  
  return repeatStr(`${str}${additionStr}`, options.repeatTimes, options.separator)
}

module.exports = {
  repeater
};
