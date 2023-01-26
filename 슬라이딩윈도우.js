// 슬라이딩 윈도우 : 고정 사이즈의 윈도우가 이동하면서 윈도우 내에 있는 데이터를 이용해 문제를 풀이하는 알고리즘을 말합니다

// Infinity : 음의 무한대 숫자

function maxSubArraySum(arr, num) {
  if (num > arr.length) return null;
  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
