function urutkanAbjad(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  var ans = '';
  for (var i = 0; i < arr.length; i++) {
    ans += arr[i];
  }

  return ans;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
