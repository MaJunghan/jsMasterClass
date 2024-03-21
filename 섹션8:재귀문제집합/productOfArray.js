// 숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오.

function productOfArray(arr) {
  let result = 0;

  function helper(helperInput) {
    // 아래 if절은 종료조건 즉, 중단점
    if (helperInput.length === 0) {
      return;
    }

    result += helperInput[0];
    helper(helperInput.slice(1));
  }
  helper(arr);
}
productOfArray([1, 2, 3, 10]);
