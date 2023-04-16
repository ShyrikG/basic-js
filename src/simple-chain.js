const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  arrChain: [],
  getLength() {
    return this.arrChain.length;
  },
  addLink(value) {
    this.arrChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || Math.floor(position) !== position || position <= 0 || position > this.arrChain.length){
      this.arrChain.length = 0;
      throw new Error ('You can\'t remove incorrect link!');
    } 
    this.arrChain.splice((position - 1), 1);
    return this;
  },
  reverseChain() {
    this.arrChain.reverse();
    return this;
  },
  finishChain() {
    let result = this.arrChain.join('~~');
    this.arrChain.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
