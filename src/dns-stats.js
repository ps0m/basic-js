const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
   let resultObject = {};
   for (const link of domains) {
      let subdomainsArray = link.split('.').reverse();    
      let subdomain;
      for (let i = subdomainsArray.length; i > 0; i--) {
         subdomainsArray = link.split('.').reverse();
         subdomain ='.' + subdomainsArray.splice(0, subdomainsArray.length - i +1 ).join('.');
         if (!resultObject[subdomain]) {
            resultObject[subdomain] = 1;
         } else resultObject[subdomain]++
      }
   }
   return resultObject;
}

module.exports = {
  getDNSStats
};
