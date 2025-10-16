const uppercaseAll = (word1, word2, word3, ...theRest) => {
  return [
    word1?.toUpperCase?.() || "",
    word2?.toUpperCase?.() || "",
    word3?.toUpperCase?.() || "",
    ...theRest.map(word => word?.toUpperCase?.() || "")
  ]
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
