function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues.arr.slice(1));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);

// 어지간하면 헬퍼함수 메소드를 사용하는것을 추천한다.
