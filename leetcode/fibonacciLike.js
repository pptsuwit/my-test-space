function fibonacciLike(a1, a2, n) {
  if (n === 1) {
    return a1;
  } else if (n === 2) {
    return a2;
  } else {
    let prev1 = a1;
    let prev2 = a2;
    let current;
    for (let i = 3; i <= n; i++) {
      current = prev1 + prev2;
      prev1 = prev2;
      prev2 = current;
    }
    return current;
  }
}

// Example input
const input = "4 2 4";
const [a1, a2, n] = input.split(" ").map(Number);

// Output
console.log(fibonacciLike(a1, a2, n));
