const uppercaseAll = (...theRest) => {
  return theRest.map(word => word.toUpperCase());
};


const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
