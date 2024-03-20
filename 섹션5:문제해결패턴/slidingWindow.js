function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
