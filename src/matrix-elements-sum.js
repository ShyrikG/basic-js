const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum(matrix) {
  let count = 0;
  let cancel = [];
  matrix.forEach(elem => {
    for (let i = 0; i < elem.length; i++){
      if (elem[i] == 0) cancel.push(i);
      if (cancel.includes(i)) continue;
      count += elem[i];
    }
  });
  return count
 }

module.exports = {
  getMatrixElementsSum
};
