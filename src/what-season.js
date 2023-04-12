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
  const season = ['winter', 'spring', 'summer', 'autumn'];
  // Если date аргумент не был передан
  if (!date) return 'Unable to determine the time of year!';
  // проверяем создан ли объект с помощью new Date (принадлежит классу Date) 
  // и проверяем, что это не больше, чем Date, т.е. методы Date не переопределены
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) throw new Error('Invalid date!');

  switch (date.getMonth()) {
    case (0):
      return season[0];
    case (1):
      return season[0];
    case (2):
      return season[1];
    case (3):
      return season[1];
    case (4):
     return season[1];
    case (5):
      return season[2];
    case (6):
     return season[2];
    case (7):
      return season[2];
    case (8):
      return season[3];
    case (9):
      return season[3];
    case (10):
      return season[3];
    case (11):
      return season[0]
  }
}

module.exports = {
  getSeason
};
