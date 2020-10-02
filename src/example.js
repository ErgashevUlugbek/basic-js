// function count(matrix) {
//     let result = 0;
  
//     for (let i = 0; i < matrix.length; i++) {
//       matrix[i].forEach(element => {
//         if(element === '^^') result++;
//       });
//     }
  
//     return result;
//   }
  
//   let mat = [[1, 0, '^^'], [1, 0, '^^']];
//   console.log(count(mat));

function dreamTeam(members) {
    let result = '';
  for (let member of members) {
    if (typeof member === 'string') {
      member = member.trim().toUpperCase();
      console.log(member);
      result += member[0];
    }
  }

  result = result.split('').sort().join('')
  return result;
}

let ms = ['Dave', 'Monk', 'Isabel', true, 1, '   alex  '];
console.log(dreamTeam(ms));