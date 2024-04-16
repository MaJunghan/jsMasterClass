function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));

// 삽입정렬을 사용하기 좋은경우 : 이미 어느정도 정렬이 된경우
// 정렬이 된경우 O(n) 일반적으로 O(n2)
