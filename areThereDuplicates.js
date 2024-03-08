function areThereDuplicates(...args) {
  const frequencyCounter1 = {};
  for (let x of args) {
    frequencyCounter1[x] = frequencyCounter1[x] + 1 || 1;
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'a')); // false
