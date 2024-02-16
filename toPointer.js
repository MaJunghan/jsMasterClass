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

// 구간합보다 크면 오른쪽 --  구간합보다 작으면 왼쪽 ++

console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]));
