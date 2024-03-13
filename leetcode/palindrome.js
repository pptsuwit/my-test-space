var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let result = true;
  const str = x.toString();
  let j = str.length - 1;

  for (i = 0; i < str.length; i++) {
    if (str[i] != str[j]) {
      result = false;
    }
    j--;
  }
  return result;
};

console.log(isPalindrome(10));
