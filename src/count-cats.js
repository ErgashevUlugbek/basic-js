const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach(element => {
      if(element === '^^') result++;
    });
  }

  return result;
};
