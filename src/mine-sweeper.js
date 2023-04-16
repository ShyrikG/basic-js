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
  let out = [];
  matrix.map(elem => out.push(elem.slice().fill(0)));

  let isInRange = (arr, x, y) =>{
    if (y < 0 || y > arr.length) return false;
    if (x < 0 || x > arr[y].length) return false; 
    return true
  }

  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j]){
        for (let m = i-1; m < i + 2; m++){
          for (let n = j - 1; n < j + 2; n++){
            if (isInRange(matrix, m, n)) out[m][n]++;
          }
        }
        out[i][j]--;
      }
    }
  }
  return out;
}


module.exports = {
  minesweeper
};
