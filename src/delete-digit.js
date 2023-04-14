const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = []
  n = `${n}`.split('')
  for (let i = 0; i < n.length; i++) {
    let number = n.reduce((accum, el, index) => {
      if (i === index) {
        accum += ''
      } else {
        accum += el;
      }
      return accum
    }, '')
    numbers.push(+(number))
  }
  console.log(numbers)
  return numbers.reduce((accum, item) => (item > accum ? accum = item : accum))
}

module.exports = {
  deleteDigit
};
