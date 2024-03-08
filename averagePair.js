function averagePair(arr, average) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right] / 2;

    if (sum === average) {
      return true;
    } else if (sum > average) {
      right--;
    } else {
      left++;
    }
  }
}

averagePair([1, 2, 3], 2.5);
