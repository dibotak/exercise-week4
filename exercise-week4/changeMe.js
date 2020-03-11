function changeMe(arr) {
  var obj = {};
  var year = 2020;
  for (var i = 0; i < arr.length; i++) {
    obj.firstName = arr[i][0];
    obj.lastName = arr[i][1];
    obj.gender = arr[i][2];
    obj.age = arr[i][3];

    if (year - obj.age < 0 || obj.age === undefined) {
      obj.age = 'Invalid Birth Year';
    } else {
      obj.age = year - obj.age;
    }

    console.log(`${i+1}. ${obj.firstName} ${obj.lastName}:`);
    console.log(obj);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
