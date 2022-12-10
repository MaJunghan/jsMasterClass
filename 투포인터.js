// 두값을 더하여 0되면 키와쌍을 반환하는 함수
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4]));
// 이렇게하면 n^2 가아니라 O(n)임.

// rn 비디오작업 커스터마이징 예정
