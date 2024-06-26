function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

// 일반적으로 O(n2) 하지만 정렬이 거의 된 경우라면 O(n)
