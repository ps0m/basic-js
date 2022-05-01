const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: '',
  getLength() {
   return this.result.split('~~').length;
  },
  addLink(value) {
     if (this.result !== '') {
        this.result += `~~( ${value} )`;
        
      } else {
         this.result += `( ${value} )`
     }
     return this;
  },
  removeLink(position) {
   try {
      if(!isNaN(position) && Number.isInteger(position) && position > 0 && position <= this.result.split('~~').length){
         let currentArray =  this.result.split('~~');
         currentArray.splice(position-1, 1);
         this.result = currentArray.join('~~');
      } else {
         this.result = '';
         throw new Error(`You can't remove incorrect link!`);
      }
      return this;
   } catch (error) {
      throw new Error(`You can't remove incorrect link!`);
   }
  },
  reverseChain() {
   this.result = this.result.split('~~').reverse().join('~~');
   return this;
  },
  finishChain() {
   let exit = this.result;
   this.result = '';
   return exit;
  }
};

module.exports = {
  chainMaker
};
