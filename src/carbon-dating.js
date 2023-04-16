const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sample) {
let MODERN_ACTIVITY = 15;
let HALF_LIFE_PERIOD = 5730;
let k = Math.LN2 / HALF_LIFE_PERIOD;
if ((typeof(sample) !== 'string') || (sample === undefined)) return false;
let n = +sample;
if ((n <= 0 )|| (n > MODERN_ACTIVITY) || isNaN(n) || (n > 15)) return false;
return Math.ceil(Math.log(MODERN_ACTIVITY / n) / k); 

}

module.exports = {
  dateSample
};
