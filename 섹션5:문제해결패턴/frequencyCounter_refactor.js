function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let x of arr1) {
    frequencyCounter1[x] = frequencyCounter1[x] + 1 || 1;
  }
  for (let x of arr2) {
    frequencyCounter2[x] = frequencyCounter2[x] + 1 || 1;
  }
  // in은 객체 , of은 배열
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [9, 1, 4]));

// n^2을 O(n)으로 개선
