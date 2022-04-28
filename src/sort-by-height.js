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
   let resultArray = arr.slice();
   let arrayWithoutOne = [];
   for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i] !== -1) {
         arrayWithoutOne.push(resultArray[i]);
         resultArray[i] = 'mark'; 
      }
   }
   arrayWithoutOne.sort((a,b)=> b - a);
      for (let i = 0; i < resultArray.length; i++) {
         if (resultArray[i] === 'mark') {
            resultArray[i] = arrayWithoutOne[arrayWithoutOne.length-1];
            arrayWithoutOne.pop();
         }
      }
   return resultArray;
}

module.exports = {
  sortByHeight
};
