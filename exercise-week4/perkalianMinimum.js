function digitPerkalianMinimum(angka) {
  var arr = [];

  var str = '';
  for (var i = 1; i <= angka; i++) {
    str = '';
    if (angka % i == 0) {
      str += `${i}` + angka/i;
      arr.push(str);
    }
  }
  var min = arr[0].length;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < min) {
      min = arr[i].length;
    }
  }

  return min;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
