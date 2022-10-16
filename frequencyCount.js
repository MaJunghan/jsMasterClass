// 빈도수 세기
// ex) 두 배열을 받는 same이라는 함수를 적어라.
// 이 함수는 만약 첫번째 배열 내의 모든 값의 두배가 두번째 배열 내에 있는 경우 true를 return 한다.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

const result = same([1, 2, 4, 2], [1, 4, 16, 4]);
console.log(result);
// 이렇게하면 결과값은 반환이됨, 문제는 nested loops (중첩 루프)라 시간복잡도가 좋지는 않음.
