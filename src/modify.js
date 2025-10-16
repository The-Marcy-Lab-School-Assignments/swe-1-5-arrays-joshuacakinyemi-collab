const uppercaseAll = (string) => {
  let upper = string.toUpperCase()
  let arr = string.split(" ")
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
