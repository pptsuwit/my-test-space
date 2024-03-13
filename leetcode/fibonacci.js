/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 2) return n;
  let prev = 0;
  let current = 1;
  for (let i = 2; i < n; i++) {
    const temp = current;
    current = current + prev;
    prev = temp;
  }

  return current;
};

const fib2 = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(3));
console.log(fib2(8));
// 0 0
// 1 1
// 2 1  <---- 2
// 3 2
// 4 3
// 5 5
// 6 8
// 7 13
// 8 21
// 9 34
