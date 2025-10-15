const uppercaseAll = (string) => {
  let arr = string.split(" ")
  for (i = 0; i < arr.length; i++) {
    arr[i].toUpperCase
  };
  return arr.join(" ")
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
