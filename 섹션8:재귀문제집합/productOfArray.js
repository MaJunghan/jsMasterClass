// 숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오.

function recursiveRange(num) {
  let result = 0;

  function helper(num) {
    // 아래 if절은 종료조건 즉, 중단점
    if (num < 1) {
      return result;
    }

    result += num;
    num--;
    helper(num);
  }
  helper(num);
  return result;
}
console.log(recursiveRange(10));

// function productOfArray(arr) {
//   if(arr.length === 0) {
//       return 1;
//   }
//   return arr[0] * productOfArray(arr.slice(1));
// }
