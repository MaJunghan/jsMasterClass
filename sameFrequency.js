function sameFrequency(num1, num2) {
  const arr1 = String(num1).split('');
  const arr2 = String(num2).split('');

  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let x of arr1) {
    frequencyCounter1[x] = frequencyCounter1[x] + 1 || 1;
  }
  for (let x of arr2) {
    frequencyCounter2[x] = frequencyCounter2[x] + 1 || 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

sameFrequency(182, 281);
