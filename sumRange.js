function sumRanege(num) {
  if (num === 1) return 1;
  return num + sumRanege(num - 1);
}

console.log(sumRanege(3)); // 6

// return 3 + sumRange(2)
//                return 2 + sumRange(1)
//                              return 1

// return 1이 반환되어 sumRange(1)의 값은 1 그럼 return 3
// sumRnage(2)의 값은 3이 들어가서 3+3 = 6
