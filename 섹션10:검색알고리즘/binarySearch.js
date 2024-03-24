// 이진탐색 주의점 : 숫자나 알파벳이 정렬되어 있어야한다.

function binarySearch(arr, num) {
  let midle = Math.floor(arr.length / 2);
  console.log(midle);
}

console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
