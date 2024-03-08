function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// 구간합보다이 0보다 작으면 left ++ , 0보다 크면 right --

console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]));
