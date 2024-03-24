// 선형검색의 자바스크립트 메소드
// indexOf
// includes
// find
// findIndex

function linearSearch(arr, num) {
  return arr.indexOf(num);
}

console.log(linearSearch([1, 2, 3, 5, 6, 7, 9, 10]), 2);

// 선형검색은 n이 많아질수록 불리하다
// 그래서 이진탐색을 사용하는것이 좋다 (대신 정렬 된 경우에만 사용)
