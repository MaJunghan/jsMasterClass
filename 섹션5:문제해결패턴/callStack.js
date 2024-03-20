function takeShower() {
  return '샤워하기~';
}

function eatBreakfast() {
  let meal = cookFood();
  return `오늘의 아침은 ${meal}`;
}

function cookFood() {
  let items = ['오트밀', '계란', '프로틴 음료'];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log('일하러 가자~~');
}

wakeUp();

// wakeUp 함수 호출 콜스택에 쌓임
// takeShower 콜스택에 쌓이고 리턴되어 콜스택제거
// eatBreakfast 콜스택에 쌓이고 cookFood 콜스택에 쌓이고 콜스택 제거 제거
// console.log
// wakeUp 함수 종료
