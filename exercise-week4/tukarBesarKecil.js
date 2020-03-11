function tukarBesarKecil(kalimat) {
  var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var kecil = 'abcdefghijklmnopqrstuvwxyz';
  var ans = '';
  for (var i = 0; i < kalimat.length; i++) {
    var check = true;
    for (var j = 0; j < besar.length; j++) {
      if (kalimat[i] === besar[j]) {
        ans += kecil[j];
        check = false;
      } else if (kalimat[i] === kecil[j]) {
        ans += besar[j];
        check = false;
      }
    }
    if (check) {
      ans += kalimat[i];
    }
  }
  return ans;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
