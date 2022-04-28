const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
//   throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
   function createObject(string) {
      let resultObject = {};
      for (const char of string.split('')) {
         if (!resultObject[char]) {
            resultObject[char] = 1;
         } else resultObject[char]++
      }
      return resultObject;
   }
   let objectForS1 = createObject(s1);
   let objectForS2 = createObject(s2);      
   
   function findEqual(object1, object2) {
      let counter = 0;
      for (const keys of Object.keys(objectForS1)) {
         if (objectForS1[keys] && objectForS2[keys]) {
            counter += Math.min(+objectForS1[keys], +objectForS2[keys])
         }
      }
      return counter;
   }
   
   return findEqual(objectForS1, objectForS2);

}
module.exports = {
  getCommonCharacterCount
};
