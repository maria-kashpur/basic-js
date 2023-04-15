const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortValues = arr.filter((el) => el !== -1).sort((a, b) => b - a)
  return arr.reduce((accum, el) => {
    if (el === -1) {
    accum.push(el)
    } else {
    accum.push(sortValues[sortValues.length - 1])
    sortValues.pop()
    }
    return accum
  }, [])
}

module.exports = {
  sortByHeight
};
