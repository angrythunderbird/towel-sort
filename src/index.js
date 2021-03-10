
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (!matrix || matrix.length === 0) {
    return [];
  }
  
  matrix.map(function (current, index) {
    index % 2 != 0 ? current.reverse() : current;
  });

  return matrix.flat();
};
