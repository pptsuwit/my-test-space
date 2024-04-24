var longestCommonPrefix = function (strs) {
  const start = strs[0];
  let result = "";
  for (let i = 0; i < start.length; i++) {
    const world = start.split("", i + 1);
    const check = strs.every((val) => {
      return val.startsWith(world.join(""));
    });
    if (check) {
      result = world.join("");
    }
  }
  return result;
};
