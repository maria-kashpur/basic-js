const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  s1 = s1.split('')
  s2 = s2.split('')
  let letters = [].concat(s1, s2)
  letters = new Set(letters)

  for (let letter of letters) {
    let a = s1.filter(el => el === letter).length
    let b = s2.filter(el => el === letter).length
    counter += Math.min(a, b) 
  }
  return counter
}

module.exports = {
  getCommonCharacterCount
};
