const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!(Array.isArray(members))) return false; 

  let result = '';
  for (let member of members) {
    if (typeof member === 'string') {
      member = member.trim().toUpperCase();
      result += member[0];
    }
  }

  result = result.split('').sort().join('')
  return result;
};
