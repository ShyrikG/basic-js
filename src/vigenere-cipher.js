const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.reverse = !isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const mesUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let res = [];
    for ( let i = 0, j = 0; i < message.length; i++, j++){
      if(alphabet.indexOf(mesUpper[i]) == -1){
        res.push(mesUpper[i]);
        j--;
        continue;
      }
      res.push(alphabet[(alphabet.indexOf(mesUpper[i]) + alphabet.indexOf(keyUpper[j % key.length])) % alphabet.length])
    }
    return this.reverse === true ? res.reverse().join('') : res.join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const keyUpper = key.toUpperCase();
    let res = [];
    for ( let i = 0, j = 0; i < message.length; i++, j++){
      if(alphabet.indexOf(message[i]) == -1){
        res.push(message[i]);
        j--;
        continue;
      }
      res.push(alphabet[(alphabet.length + alphabet.indexOf(message[i]) - alphabet.indexOf(keyUpper[j % key.length])) % alphabet.length])
    }
    return this.reverse === true ? res.reverse().join('') : res.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
