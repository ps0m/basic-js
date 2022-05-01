const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
   constructor (name) {
      this.name = name;
      this.maxDepth = 0;
      this.counter = 0;
   }
   calculateDepth(arr) {
      return Math.max(...arr.map(x => Array.isArray(x) ? this.calculateDepth(x) : 0), 0) + 1;
   }
}

module.exports = {
  DepthCalculator
};
