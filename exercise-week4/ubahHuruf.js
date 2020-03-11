function ubahHuruf(kata) {
  var alpha = 'abcdefghijklmnopqrstuvwxyza';
  var res = '';
  for (var i = 0; i < kata.length; i++) {
    var check = true;
    for (var j = 0; j < alpha.length; j++) {
      if (kata[i] === alpha[j]) {
        res += alpha[j+1];
        check = false;
      }
    }
    if (check) {
      res += kata[i];
    }
  }
  return res;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

