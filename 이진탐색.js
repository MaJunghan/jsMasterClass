// 배열이나 문자열같은 큰 규모의 데이터를 처리할떄 사용.

// function search(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

// 이진탐색

function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2); // floor  : 소수점 버림 ex) 3.5  => 3

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 9, 12, 16, 29], 2));
