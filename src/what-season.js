const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
      if (arguments.length === 0) {
      return 'Unable to determine the time of year!';
      }
      if ((Object.getOwnPropertyNames(date).length > 0) || !(Object.prototype.toString.call(date) === '[object Date]') ) {
         throw new Error('Invalid date!');
      }
      
      let currentMonth = date.getMonth();
      console.log(currentMonth);
      
      if (currentMonth === 11 || currentMonth < 2) {
         return 'winter'
      }
      if (1 < currentMonth  && currentMonth < 5) {
         return 'spring'
      }
      if (4 < currentMonth  && currentMonth < 8) {
         return 'summer'
      }
      if (7 < currentMonth  && currentMonth < 11) {
         return 'autumn'
      }
}


module.exports = {
  getSeason
};
