function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    false;
  }
  let counter1 = {};
  let counter2 = {};
  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }
  console.log(counter1);
  console.log(counter2);
  for (let key in counter1) {
    // 제곱값이 count2에 있는지?
    if (!(key ** 2 in counter2)) {
      return false;
    }
    // 있는데 수량이 맞는지 ?
    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 1], [4, 9, 1, 1]));
