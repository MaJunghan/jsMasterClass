function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

// 배열에서 num 자리수 만큼 합한다.
// 나머지 배열에서 시작점을 num으로 한다.
// 기존 합한 값에서 1자리씩 이동하며 더해주고 기존값에서 배일 앞자리를 빼준다.
