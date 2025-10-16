const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront = true && value < arr[0]) {
    arr.unshift(value)
  } else {
    arr.push(value)
  }
  return arr
};

const reverseString = (string) => {
  if (typeof string === 'string') {
    let arr = string.split('')
    let reverse = arr.reverse()
    let come = reverse.join("")
    return come
  } else {
    return 'not a string'
  }
};

const newArrayFullOf = (value, numOfValue) => {
  const arr = []
  for (i = 0; i < numOfValue; i++) {
    arr.push(value)
  }
  return arr
};

const insertIntoMiddle = (arr, value) => {
  let middle = Math.floor(arr.length / 2)
  arr.splice(middle, 0, value)
  return arr
};

const deleteFromMiddle = (arr) => {
  let middle = Math.floor(arr.length / 2)
  arr.splice(middle, 1)
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
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    let round = Math.floor(num)
    newArr.push(round)
  }
  return newArr
};

const getAllYCoordinates = (arrOfCoords) => {
  let newArr = []
  for (i = 0; i < arrOfCoords.length; i++) {
    let into = arrOfCoords[i]
    let add = into[1]
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
