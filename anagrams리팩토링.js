function validAnagram(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let lookup = {};

  for (let i = 0; i < arr1.length; i++) {
    let letter = arr1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < arr2.length; i++) {
    let letter = arr2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
