/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  for (i = 0; arr.length !== 0; i++) {
    arr.pop();
  }
  return arr
};

const getFirstItem = (array) => {
  return array[0];
};

module.exports = {
  clearArr,
  getFirstItem,
};
