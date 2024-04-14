/** FEEDBACK: Great use of .map here! */
const uppercaseAll = (...words) => {
  return words.map((word) => word.toUpperCase());
};
/** FEEDBACK: Perfect! */
const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;

  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
