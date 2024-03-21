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
}
productOfnumay(10);

// function recursiveRange(x){
//   if (x === 0 ) return 0;
//   return x + recursiveRange(x-1);
// }
