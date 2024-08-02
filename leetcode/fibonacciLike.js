// A Fibonacci-like sequences is a sequence of integers a(1), a(2), ... for which a(n) = a(n-1) + a(n-2) for all n > 2 . you are given the first two elements of the sequence a(1) and a(2), and the 1-based index n. Output the n-th element of the sequence.

// the input data consists of a single line which contains integers a(1), a(2) and n separated by single spaces. 0 < a1 < a2, m < 10

// example
// input
// 1 2 3
// output
// 3

// function fibonacciLike(a1, a2, n) {
//   if (n === 1) {
//     return a1;
//   } else if (n === 2) {
//     return a2;
//   } else {
//     let prev1 = a1;
//     let prev2 = a2;
//     let current;
//     for (let i = 3; i <= n; i++) {
//       current = prev1 + prev2;
//       prev1 = prev2;
//       prev2 = current;
//     }
//     return current;
//   }
// }
// function fibonacciLike(a1, a2, n) {
//   if (n === 1) return a1;
//   else if (n === 2) return a2;
//   else {
//     let result = [0, a1, a2];
//     for (let i = 3; i <= n; i++) {
//       result[i] = result[i - 1] + result[i - 2];
//     }
//     return result[n];
//   }
// }
function fibonacciLike(a1, a2, n) {
  // If n is 1 or 2, return the corresponding initial value
  if (n === 1) return a1;
  if (n === 2) return a2;

  // Initialize the array with a placeholder at index 0 and the first two elements
  let a = [0, a1, a2];

  // Compute the sequence up to the n-th element
  for (let i = 3; i <= n; i++) {
    a[i] = a[i - 1] + a[i - 2];
  }

  // Return the n-th element
  return a[n];
}
// Example input
const input = "1 2 4";
const [a1, a2, n] = input.split(" ").map(Number);

// Output
console.log(fibonacciLike(a1, a2, n));

// 4;
// 2;
// 3 = 6;
// 4 = 8;
// 5 = 14;
// 6 = 22;
