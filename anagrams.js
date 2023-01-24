function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let count1 = {};
  let count2 = {};
  for (let val of arr1) {
    count1[val] = (count1[val] | 0) + 1;
  }
  for (let val of arr2) {
    count2[val] = (count2[val] | 0) + 1;
  }

  for (let key in count1) {
    if (!key in count2) return false;
    if (count1[key] !== count2[key]) return false;
  }

  return true;
}
console.log(validAnagram("", "")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
