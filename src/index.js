module.exports.equalToZero = function(array) {
    let maxNum = Math.max(...array);
    let sumAcc = array.reduce(function (sum, current) {
      return sum + current;
    });
  
    if (maxNum > sumAcc / 2 || sumAcc % 2 !== 0) {
      return "NO";
    } else {
      return "YES";
    }
  }