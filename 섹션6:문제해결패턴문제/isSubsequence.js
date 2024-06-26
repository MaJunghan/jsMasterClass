function isSubsequence(str1, str2) {
  let left = 0;
  let right = 0;

  while (left < str1.length && right < str2.length) {
    if (str1.charAt(left) === str2.charAt(right)) {
      left++;
    } else {
      right++;
    }
    if (left === str1.length) return true;
  }
  return false;
}
console.log(isSubsequence('abc', 'acb'));
