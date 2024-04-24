// const s = "{[]}";
const s = "(([]){})";
var isValid = function (s) {
  const str = [...s];

  if (
    str.filter((x) => x === "(").length !==
      str.filter((x) => x === ")").length ||
    str.filter((x) => x === "[").length !==
      str.filter((x) => x === "]").length ||
    str.filter((x) => x === "{").length !== str.filter((x) => x === "}").length
  ) {
    return false;
  }

  let flag = true;
  let arr = [];
  str.map((item) => {
    if (item === "(" || item === "[" || item === "{") {
      arr.push(item);
    } else {
      if (item === ")") {
        const index = arr.findLastIndex((x) => x === "(");
        if (arr.length - 1 !== index) {
          flag = false;
        } else {
          arr.splice(index, 1);
        }
      } else if (item === "]") {
        const index = arr.findLastIndex((x) => x === "[");
        if (arr.length - 1 !== index) {
          flag = false;
        } else {
          arr.splice(index, 1);
        }
      } else if (item === "}") {
        const index = arr.findLastIndex((x) => x === "{");
        if (arr.length - 1 !== index) {
          flag = false;
        } else {
          arr.splice(index, 1);
        }
      }
    }
  });
  return arr.length === 0 && flag;
};

console.log(isValid(s));
