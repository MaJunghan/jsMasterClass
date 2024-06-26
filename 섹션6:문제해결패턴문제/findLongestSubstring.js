function findLongestSubstring(str) {
  // 문자열 길이가 1이하인 경우 따로 처리
  if (str.length <= 1) {
    return str.length;
  }

  // 포인터 및 초기값 설정
  let i = 0;
  let j = 1;
  let answer = 0;
  let tmpStr = str[0];

  while (j < str.length) {
    // 포함되어있다면 왼쪽에서 한 칸 줄인다.
    if (tmpStr.includes(str[j])) {
      i++;
      tmpStr = tmpStr.substring(1);
    }

    // 포함되어있지 않다면 오른쪽 하나씩 늘리고 답을 계속 갱신
    else {
      tmpStr += str[j];
      answer = Math.max(tmpStr.length, answer);
      j++;
    }
  }
  return answer;
}

console.log(findLongestSubstring('bbbbbbb'));
