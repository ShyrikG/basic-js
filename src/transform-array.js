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
  if (!Array.isArray(arr)){
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  let nextDel = false;
  let out = [];
  for (let i = 0; i < arr.length; i++)  {

      switch (arr[i]) {
        case '--double-prev':
          if (i == 0) break;
          if (nextDel === false){
            out.push(arr[i-1]);   
          } else {
            nextDel = false;
          } 
          break;
        case '--double-next':
          if (i == arr.length - 1) break;
          out.push(arr[i+1]);
          nextDel = false;
          break;
        case '--discard-prev':
          if (nextDel === false){
            out.pop();
          } else {
            nextDel = false;
          }
          break;
        case '--discard-next':
          i++;
          nextDel = true;
          break;
        default:
          out.push(arr[i]);
          nextDel = false;
      }
  }
  return out;
}

module.exports = {
  transform
};
