const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
   if (!Array.isArray(members)) {
      return false;
   }
   let nameArray = members.filter(w => typeof w === 'string');
   nameArray = nameArray.map ((str) => str.trim().toUpperCase())
   nameArray.sort();
   return nameArray.reduce((r,c) => r + c[0], '');
}
module.exports = {
  createDreamTeam
};
