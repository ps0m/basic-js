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
   let array = n.toString().split('');
   let min = array[0];
   for (let i = 1; i < array.length; i++) {
      if (+min < +array[i]) {
         array[i-1] = '';
         return +array.join('');
      }
      if (+min > +array[i]) {
         array[i] = '';
         return +array.join('');
      }
   }
   +array.pop(); 
   return array.join('');
}

module.exports = {
  deleteDigit
};
