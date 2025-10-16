const uppercaseAll = (string) => {
  let word = string.join(" ")
  let upper = word.toUpperCase()
  let arr = upper.split(" ")
  return arr
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
