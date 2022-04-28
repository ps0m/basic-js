const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
   let resultMatrix = JSON.parse(JSON.stringify(matrix));
   console.log(resultMatrix);
   for (let a = 0; a < matrix.length; a++) {
       for (let b = 0; b < matrix[0].length; b++) {
         resultMatrix[a][b] = 0;
      }
   }
   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
         counter = 0;
         if (matrix[i][j] === true) {
         for (let k = i-1; k <= i+1; k++) {
            for (let l = j-1; l <= j+1; l++) {
                  if( (typeof  resultMatrix?.[k]?.[l] !== 'undefined') && ((k !== i) || (l !== j)) ) {
                  resultMatrix[k][l] += 1;
                  }
               }
            }
         }
         
      }
   }
   return resultMatrix;
}
module.exports = {
  minesweeper
};
