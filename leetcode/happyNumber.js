var isHappy = function (n) {
  let visited = new Set();
  while (!visited.has(n)) {
    visited.add(n);
    n = sumOfSquares(n);
    if (n == 1) {
      return true;
    }
    // console.log(n);
    console.log(visited);
  }
  return false;
};
var sumOfSquares = function (n) {
  let sum = 0;
  while (n > 0) {
    console.log(n);
    sum += (n % 10) * (n % 10);
    n = Math.floor(n / 10);
  }
  return sum;
};

const n = 7;
console.log(isHappy(n));
// let visited = new Set();
// visited.add(1);
// visited.add(2);
// visited.add(3);
// visited.add(4);

// console.log(visited.has(5));
