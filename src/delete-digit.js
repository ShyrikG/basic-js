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
  let str = String(n).split('');
  let ind = str.length-1;
  for (let i = 0; i < ind; i++){
    if (str[i] < str[i+1]) {ind = i; break}; 
  }
  str.splice(ind, 1);
  return +str.join('');
}

module.exports = {
  deleteDigit
};
