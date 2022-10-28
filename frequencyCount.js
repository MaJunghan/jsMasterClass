// 빈도수 세기
// ex) 두 배열을 받는 same이라는 함수를 적어라.
// 이 함수는 만약 첫번째 배열 내의 모든 값의 두배가 두번째 배열 내에 있는 경우 true를 return 한다.

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     const correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) return false;
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// const result = same([1, 2, 4, 2], [1, 4, 16, 4]);
// console.log(result);

// 이렇게하면 결과값은 반환이됨, 문제는 nested loops (중첩 루프)라 시간복잡도가 좋지는 않음.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    console.log(key, "key");

    if (!(key ** 2 in frequencyCounter2)) {
      return false; // frequencyCounter1의 key의 제곱값이 frequencyCounter2 의 key 값으로 존재하는지를 확인한다.
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false; // 해당 key의 value 값을 확인한다.
    }
  }
  console.log(frequencyCounter1, frequencyCounter2);
  return true;
}
console.log(same([1, 2, 3, 3], [9, 9, 1, 4]));
//                          요점
// 중첩 루프안쓰고 저렇게하면 n이 1천일경우, 1만번을 연산하는데
// 저렇게 하면 2천번만 연산하면됨 => 효율적
// 객체로 key와 value 둘다 확인해야함.

// react-native-slick
