const convertRomanToInt = (value) => {
  console.log(value);
  switch (value) {
    case "I":
      return 1;
    case "IV":
      return 4;
    case "IX":
      return 9;
    case "V":
      return 5;
    case "X":
      return 10;
    case "XL":
      return 40;
    case "XC":
      return 90;
    case "L":
      return 50;
    case "C":
      return 100;
    case "CD":
      return 400;
    case "CM":
      return 900;
    case "D":
      return 500;
    case "M":
      return 1000;
  }
};

var romanToInt = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === "I" || s[i] === "X" || s[i] === "C") &&
      s[i + 1] !== undefined
    ) {
      if (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
        result += convertRomanToInt(s[i] + s[i + 1]);
        i++;
      } else if (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
        result += convertRomanToInt(s[i] + s[i + 1]);
        i++;
      } else if (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
        result += convertRomanToInt(s[i] + s[i + 1]);
        i++;
      } else {
        result += convertRomanToInt(s[i]);
      }
    } else {
      result += convertRomanToInt(s[i]);
    }
  }
  return result;
};
console.log(romanToInt("DCXXI"));
