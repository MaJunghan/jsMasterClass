// 버블정렬 : 왼쪽값과 오른쪽값을 비교해서 왼쪽값이 더크면 오른쪽으로 이동 > 정렬될떄까지 반복
// 배열의 개수가 5개면 한바뀌돌면 다음 정렬안된 개수는 4개 > 3 > 2 > 1
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([37, 45, 29, 8]));
