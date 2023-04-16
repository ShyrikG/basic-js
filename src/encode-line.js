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
  let out = '';
  for (let i = 0; i < str.length;){
    let count = 1; 
    let j = i + 1;
    while (str[i] == str[j]){
      j++;
      count++;
    }
    (count !== 1) ? out += count + str[i] : out += str[i];
    i = j;
  }
  return out;
}


module.exports = {
  encodeLine
};
