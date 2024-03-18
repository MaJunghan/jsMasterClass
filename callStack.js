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
