
const isValid = (a, b, c) => {
  if (a > 0 && b > 0 && c > 0)
    if (a + b > c && a + c > b && b + c > a) return true;
  return false;
};

function triangle(a, b, c) {
  if (!isValid(a, b, c)) return 'Invalido';
  if (a === b && a === c) return 'Equilatero';
  if (a === b || b === c) return 'Isoseles';
  else return 'Escaleno';
}

// console.log(triangle(1, 1, 1));
// console.log(triangle(2, 2, 4));
// console.log(triangle(2, 3, 5));
// console.log(triangle(2, 3, 6));
// console.log(triangle(0, 0, 0));


module.exports = triangle;
