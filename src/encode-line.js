const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('');
  let code = str.reduce((accum, el, index, arr) => {
    if (el !== arr[index - 1]) {
      accum.push(1)
      accum.push(el)
    } else {
      accum[accum.length - 2] ++
    }
    return accum
  }, [])
  return code.filter(el => el !== 1).join('')
}

module.exports = {
  encodeLine
};
