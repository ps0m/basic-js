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

function encodeLine( str) {
   if (str === '') {
      return '';
   }
   let resultString = '';
   let counter = 1;
   let currentElement = str[0];
   for (let i = 1; i < str.length; i++) {
      if (str[i] === currentElement) {
         counter++;
      } else { 
         if (counter === 1) {
            counter = '';
         } 
         resultString += counter + str[i-1];
         counter = 1;
      }
      currentElement =  str[i];
   }
   if (counter === 1) {
            counter = '';
         } 
         resultString += counter + str[str.length-1];
   return resultString;
}

module.exports = {
  encodeLine
};
