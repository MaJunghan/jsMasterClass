// 선택정렬 : 리스트를 순회하면서 최소값을 찾아서 제일 앞에 배치하는 방법
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
