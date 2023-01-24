function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    false;
  }
  let counter1 = {};
  let counter2 = {};
  for (val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }
  console.log(counter1);
  console.log(counter2);
  for (let key in counter1) {
    // 제곱값이 count2에 있는지?
    if (!(key ** 2 in counter2)) {
      // in: 값이있으면 true를 반환
      return false;
    }
    // 있는데 수량이 맞는지 ?
    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));

// 빈도카운터란의 요점
// 2개의 배열을 객체화 세분화하여 각 배열을 비교한다.
// 향상된 속도 기대가능 O(n^) => O(n)
