let n = 3;
let k = 4;
let x;
let arr = [1, 2, 3];
let str = '';
let arr2 =[];

for (let i = 0; i < k; i++) {
  str = '';
  x = arr[i];
  str = str + arr[i].toString()

  for (let j = 0; j < k; j++) {

    if (x == arr[j]) {

    } else {
      str = str + arr[j].toString()
    }

  }
  console.log(str)
  arr2.push(str)
  str = arr[i].toString()
  for (let z = k - 1; z >= 0; z--) {
    if (x == arr[z]) {

    } else {
      str = str + arr[z].toString()
    }

  }
  console.log(str)
  arr2.push(str)
}
console.log(arr2)
