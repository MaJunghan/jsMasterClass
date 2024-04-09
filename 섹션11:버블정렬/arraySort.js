const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
// Expected output: Array [1, 100000, 21, 30, 4]

// 유니코드 기준으로 값이 정렬하기 때문에 숫자는 선택적 비교함수를 인자로 전달받음
const array2 = [1, 30, 4, 21, 100000].sort((a, b) => a - b);
console.log(array2);
