const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) === false) {
     throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let markers = ['--double-prev', '--double-next', '--discard-next', '--discard-prev']
  let result = [];
  expandArray(arr)

  function expandArray(arr) {
     arr.forEach((element, index, array) => {
        if (Array.isArray(element) === true && element.length !== 0) {
           expandArray(element)
        }
        if (isNotAMarker(element) && arr[index - 1] !== '--discard-next' && Array.isArray(element) === false && element !== undefined) {
          result.push(element)
        } else if (element === '--double-prev' && arr[index - 2] !== '--discard-next') {
          if (result[result.length - 1] !== undefined) result.push(result[result.length - 1])
        } else if (element === '--double-next' && isNotAMarker(array[index + 1])) {
          if (array[index + 1] !== undefined) result.push(array[index + 1])
        } else if (element === '--discard-prev' && arr[index - 2] !== '--discard-next') {
           result.pop()
        }
        
        function isNotAMarker (element) {
           if (element !== '--double-prev' && element !== '--double-next' && element !== '--discard-next' && element !== '--discard-prev') {
              return true
           } else {
              return false
           }
        } 
     });
  }

  return result
}

module.exports = {
  transform
};
