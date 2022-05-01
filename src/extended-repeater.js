const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
   let resultString = '';
   let {repeatTimes = 0, separator = '+', 
   addition = '', additionRepeatTimes = 0, additionSeparator = '|' } = options;
   if (repeatTimes === 0) {
      resultString += str
      resultString += addition;
      return resultString;
   }

   for (let i = 0; i < repeatTimes; i++) {
      resultString += str
      resultString += addition;
      for (let j = 0; j < additionRepeatTimes - 1; j++) {
         resultString += additionSeparator + addition;
      }
      if (i < repeatTimes-1) {
         resultString += separator;
      }
   }
   return resultString;
}

module.exports = {
  repeater
};
