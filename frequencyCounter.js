function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const findIndex = arr2.indexOf(arr1[i] ** 2);
    if (findIndex === -1) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [9, 1, 4]));
