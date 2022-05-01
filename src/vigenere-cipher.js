const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
   constructor (flag = true) {
      // this.name = name;
      this.flag = flag;
      this.alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      this.squareVigenere = [];
            for (let i = 0; i < this.alphabetArray.length; i++) {
                this.squareVigenere[i] = this.alphabetArray.slice(i).concat(this.alphabetArray.slice(0, i));
            }
   }
   encrypt(message, key) {
      try {
         if(message !== 'undefined' || key !== 'undefined'){
            this.message = message.toUpperCase();
            this.key = key.toUpperCase();
            this.numberCurrentChair = 0;
            this.resultCipher = this.message.split('').map((item)=>{
               if (this.alphabetArray.includes(item)) {
                  return this.squareVigenere[this.alphabetArray.indexOf(item)][this.alphabetArray.indexOf(this.key[this.numberCurrentChair++ % this.key.length])];
               } 
               return item;
            });
            if (!this.flag) {
               return this.resultCipher.reverse().join('');
            }  else {
               return this.resultCipher.join('');
            }
         } else {
            throw new Error(`Incorrect arguments!`);
         }
      } catch (error) {
         throw new Error(`Incorrect arguments!`);
      }

   }
   decrypt( cipher, key) {
      try {
         if(cipher !== 'undefined' || key !== 'undefined'){
            this.cipher = cipher.toUpperCase();
            this.key = key.toUpperCase();
      
            this.numberCurrentChair = 0;
            this.resultCipher = cipher.split('').map((item)=>{
            if (this.alphabetArray.includes(item)) {
               this.row = this.alphabetArray.indexOf(this.key[this.numberCurrentChair % this.key.length])
               this.coll = this.squareVigenere[this.row].indexOf(item);
               this.numberCurrentChair++;
               return this.alphabetArray[this.coll];
            } 
            return item;
            });
            
            if (!this.flag) {
               return this.resultCipher.reverse().join('');
            }  else {
               return this.resultCipher.join('');
            }
         } else {
            throw new Error(`Incorrect arguments!`);
         }
      } catch (error) {
         throw new Error(`Incorrect arguments!`);
      }
      
   }
}

module.exports = {
  VigenereCipheringMachine
};
