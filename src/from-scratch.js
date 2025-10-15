const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront = true) {
    arr.unshift(value)
  } else {
    arr.push(value)
  }
  return arr
};

const reverseString = (string) => {
  if (typeof string === 'string') {
    let arr = string.split('')
    let reverse = arr.reverse
    let come = reverse.join
    return come
  } else {
    return 'not a string'
  }
};

const newArrayFullOf = (value, numOfValue) => {
  const arr = []
  for (i = 0; i < numOfValue; i++) {
    return arr.push(value)
  }
};

const insertIntoMiddle = (arr, value) => {
  let middle = Math.floor(arr.length / 2)
  arr.splice(middle, 0, value)
  return arr
};

const deleteFromMiddle = (arr) => {
  let middle = Math.floor(arr.length / 2)
  arr.splice(1, middle)
  return arr
};

const isRightIndex = (arr, value, index) => {
  if (arr[index] === value) {
    return true
  } else {
    return false
  }
};

const roundAllNumsDown = (arr) => {
  let newArr = []
  for (i = 0; i < arr - 1; i++) {
    let num = Math.floor(arr[i])
    newArr.push(num)
  }
  return newArr
};

const getAllYCoordinates = (arrOfCoords) => {
  let newArr = []
  for (i = 0; i < arrOfCoords.length; i++) {
    let into = arrOfCoords[i]
    let add = into[i]
    newArr.push(add)
  }
  return newArr
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
