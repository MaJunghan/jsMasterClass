function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break; // short의 특정문자와 long의 text가 일치 하지 않으면 break
      if (j === short.length - 1) count++; // short의 마지막 인덱스까지 왔으면 일치하는 text
    }
  }
  return count;
}

console.log(naiveSearch('lorie loled', 'lol'));
