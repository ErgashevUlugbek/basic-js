const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  for (const item of arr) {
    if (typeof item !== "number") {
      let i = arr.indexOf(item);
      switch (item) {
        case "--discard-next":
          discardNext(i);
          break;
        case "--discard-prev":
          discardPrev(i);
          break;

        case "--double-next":
          doubleNext(i);
          break;

        case "--double-prev":
          doublePrev(i);
          break;
      }
    }
  }

  function discardPrev(index) {
    if (index === 0) {
      arr.splice(index, 1);
      return arr;
    }
    arr.splice(index - 1, 2);
    return arr;
  }

  function discardNext(index) {
    if (index === arr.length - 1) {
      arr.splice(index, 1);
      return arr;
    }
    arr.splice(index, 2);
    return arr;
  }

  function doubleNext(index) {
    if (index === arr.length - 1) {
      arr.splice(index, 1);
      return arr;
    }
    arr.splice(index, 1, arr[index + 1]);
    return arr;
  }

  function doublePrev(index) {
    if (index === 0) {
      arr.splice(index, 1);
      return arr;
    }
    arr.splice(index, 1, arr[index - 1]);
    return arr;
  }

  return arr;
};
