function maxSubArraySum(arr, num) {
  if (num > arr.length) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]; // 처음 3개값을 더함
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // input이 많으면 해당 값들을 전부다 다시 더하는것이아니라, 슬라이딩 윈도우의 제일앞을 뺴고, 전진한값을 더하기만하면 좋은효율이 나오는코드
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
