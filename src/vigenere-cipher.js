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
  constructor (type) {
    this.type = type === true || type === undefined ? true : false;
    this.alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    this.dictionary = this.alfabet.reduce((accum, el, index) => {
    accum[el] = index;
    return accum;
    }, {})
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error ('Incorrect arguments!')
    }

    console.log(this.type)
    message = message.toUpperCase().split('')
    key = key.toUpperCase()
    let onlyWords = message.reduce((acc, el) => {
     if (this.dictionary[el] !== undefined) {
        acc.push(el)
     }
     return acc
    }, [])

    onlyWords = onlyWords.reduce((result, el, index) => {
        let dictionaryValueMessege = this.dictionary[el]
        let dictionaryValueKey = this.dictionary[key[index % key.length]]
        let newIndex = (dictionaryValueMessege + dictionaryValueKey) % this.alfabet.length
        result.push(this.alfabet[newIndex])
        return result;
     }, [])
     
     let count = 0;
     let result =  message.reduce((accum, el) => {
        if (this.dictionary[el] !== undefined) {
           accum += onlyWords[count]
           count += 1
        } else {
           accum += el
        }
        return accum
     }, "")

     if (this.type) {
        return result
     } else {
        return result.split('').reverse().join('')
     }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error ('Incorrect arguments!')
    }
    encryptedMessage = encryptedMessage.split('')
    key = key.toUpperCase()
    let onlyWords = encryptedMessage.reduce((acc, el) => {
     if (this.dictionary[el] !== undefined) {
        acc.push(el)
     }
     return acc
    }, [])

    onlyWords = onlyWords.reduce((result, el, index) => {
     let dictionaryValueMessege = this.dictionary[el]
     let dictionaryValueKey = this.dictionary[key[index % key.length]]
     let newIndex = (dictionaryValueMessege - dictionaryValueKey + this.alfabet.length) % this.alfabet.length
     result.push(this.alfabet[newIndex])
     return result;
  }, [])


    let count = 0;
    let result = encryptedMessage.reduce((accum, el) => {
       if (this.dictionary[el] !== undefined) {
          accum += onlyWords[count]
          count += 1
       } else {
          accum += el
       }
       return accum
    }, "")

    if (this.type) {
        return result
     } else {
        return result.split('').reverse().join('')
     }
  }
}

module.exports = {
  VigenereCipheringMachine
};
