function minSubArrayLen(arr, num) {
  // n개일때 num와 크기 비교
  let total = 0;
  let start = 0;
  let end = 0;
  let minlen = Infinity;
  while (start < arr.length) {
    if (total < num && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= num) {
      minlen = Math.min(minlen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minlen === Infinity ? 0 : minlen;
}

console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
