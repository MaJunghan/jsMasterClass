function charCount(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // 0보다 크면 이미 있다.
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  console.log(result);
  return result;
}
charCount("Hello Word");
