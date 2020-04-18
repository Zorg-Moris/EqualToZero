module.exports.equalToZero = function (array) {
  let maxNum = Math.max(...array);
  let sumAcc = array.reduce(function (sum, current) {
    return sum + current;
  });

  if(sumAcc % 2 === 0 && 2 * maxNum <= sumAcc) {
    return "YES";
  } 
   return "NO"; 
}
