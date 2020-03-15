function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  var arr = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    arr.push({});
    var dariKe = [];
    arr[i].penumpang = arrPenumpang[i][0];
    arr[i].naikDari = arrPenumpang[i][1];
    arr[i].tujuan = arrPenumpang[i][2];
    for (var j = 0; j < rute.length; j++) {
      if (arr[i].naikDari === rute[j]) {
        dariKe.push(j);
      } else if (arr[i].tujuan === rute[j]) {
        dariKe.push(j);
      }
    }
    var total = (dariKe[1] - dariKe[0]) * 2000;
    arr[i].bayar = total;
  }
  return arr;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
