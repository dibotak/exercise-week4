function checkAB(string) {
  var indA = [];
  var indB = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
      indA.push(i);
    } else if (string[i] === 'b'){
      indB.push(i);
    }
  }
  
  for (var i = 0; i < indA.length; i++) {
    for (var j = 0; j < indB.length; j++) {
      if (indA[i] - indB[j] === 4 || indA[i] - indB[j] === -4) {
        return true;
      }
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
