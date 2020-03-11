function cariModus(arr) {
  var store = [];
  //angka yang sama dimasukkan ke dalam array yg isinya angka yg sama
  for (var i = 0; i < arr.length; i++) {
    var check = true;
    for (var j = 0; j < store.length; j++) {
      if (arr[i] == store[j][0]) {
        store[j].push(arr[i]);
        check = false;
      }
    }
    if (check) {
      store.push([arr[i]]);
    }
  }

  //menghitung panjang array masing-masing angka
  var batas = 1;
  var max;

  for (var i = 0; i < store.length; i++) {
    if (store[i].length > batas) {
      max = store[i][0];
      batas = store[i].length
    }
  }

  if (store.length === 1 || batas === 1) {
    max = -1;
  }
  return max;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
