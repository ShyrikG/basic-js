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
  let bufer = arr.filter(item => ~item).sort((a, b) => a - b)
  let i = 0;
  return arr.map((item)=>{
      if (~item) {
        let k = i;
        i++;
        return bufer[k];
      } else {
        return -1
      }
    })
  }

module.exports = {
  sortByHeight
};
