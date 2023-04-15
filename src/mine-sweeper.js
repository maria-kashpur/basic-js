const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = []
  matrix.forEach((row, posRow, field) => {
    let value = row.reduce((convertRow, el, index) => {
      let coordinates = {
        topLeft: field[posRow - 1] === undefined ? 0 : field[posRow - 1][index - 1] === true ? 1 : 0,
        topCenter: field[posRow - 1] === undefined ? 0 : field[posRow - 1][index] === true ? 1 : 0,
        topRight: field[posRow - 1] === undefined ? 0 : field[posRow - 1][index + 1] === true ? 1 : 0,
        right: row[index + 1] === true ? 1 : 0,
        left: row[index - 1] === true ? 1 : 0,
        bottomLeft: field[posRow + 1] === undefined ? 0 : field[posRow + 1][index - 1] === true ? 1 : 0,
        bottomCenter: field[posRow + 1] === undefined ? 0 : field[posRow + 1][index] === true ? 1 : 0,
        bottomRight: field[posRow + 1] === undefined ? 0 : field[posRow + 1][index + 1] === true ? 1 : 0,
      }
      let num = Object.values(coordinates).reduce((sum, el) => sum += el)
      convertRow.push(num)
      return convertRow
    }, [])
    result.push(value)
  })
  return result
}

module.exports = {
  minesweeper
};
