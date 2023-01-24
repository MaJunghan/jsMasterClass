function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++; // left +1
      arr[i] = arr[j]; // 이렇게 i 문을 바꾼 배열자체는 사용할 수 가없음.. 그냥 정렬해서 i의 개수 파악하려고 이렇게하는거임
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
