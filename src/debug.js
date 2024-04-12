/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  // Remove all elements from index 0 to the end of the array
  while (arr.length > 0) {
    arr.pop();
  }
  return arr;
};

console.log(clearArr(4, 5, 6, 7));
const getFirstItem = (array) => {
  return array[0];
};
console.log(getFirstItem([8, 3, 4, 5, 6]));

module.exports = {
  clearArr,
  getFirstItem,
};
