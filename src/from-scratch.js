/** FEEDBACK: Because conditional statement naturally will evaluate truthy or falsy, you do not need to set it equal to true! */
const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    arr.unshift(value);
  } else {
    arr.push(value);
  }
  // = delcaring == checking === type and value
};

const reverseString = (str) => {
  let newVar = [...str];
  return newVar.reverse().join("");
  // return newVar;
};

const newArrayFullOf = (value, numOfValue) => {
  const water = [];
  for (let i = numOfValue; i > 0; i--) {
    water.push(value);
  }
  return water;
};
newArrayFullOf(1, 5);

const insertIntoMiddle = (arr, value) => {
  arr.splice(Math.floor(arr.length / 2), 0, value);
  //arr.length // math.floor makes

  //[_insert.splice_];
  return arr;
};
insertIntoMiddle([9, 9, 9, 9, 9, 9], 8);

const deleteFromMiddle = (arr) => {
  arr.splice(Math.floor(arr.length / 2), 1);

  return arr;
};
deleteFromMiddle([1, 2, 3, 4, 5, 6]);
/** FEEDBACK: Great job here! */
const isRightIndex = (arr, value, index) => {
  return value === arr[index];
};
//equality expression , once used it is returned as a boolean.
isRightIndex([1, 2, 3, 4], 3, 1);

const roundAllNumsDown = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(Math.floor(arr[i]));
  }

  return output;
};
roundAllNumsDown([1.3, 2.7, 3.2, 4.2]);

const getAllYCoordinates = (arrOfCoords) => {
  let output = [];

  for (let i = 0; i < arrOfCoords.length; i++) {
    output.push(arrOfCoords[i][1]); // dont add a , between [] []it will consider it as "and" and log both
  }
  return output;

  // arr[i][1] gives (-, y)
};
// [0][0]
console.log(
  getAllYCoordinates([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
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
