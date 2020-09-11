const triangle = require('./triangle')


test('Teste triangulo', () => {
  //true values
  expect(triangle(1, 1, 1)).toBe('Equilatero');
  expect(triangle(2, 2, 3)).toBe('Isoseles');
  expect(triangle(2, 3, 3)).toBe('Isoseles');

  // valores inválidos
  expect(triangle(2, 3, 6)).toBe('Invalido');
  expect(triangle(-1, -1, 0)).toBe('Invalido');
  expect(triangle(-1, -1, -2)).toBe('Invalido');
  expect(triangle(0, 0, 0)).toBe('Invalido');
  expect(triangle('a', 0, 0)).toBe('Invalido');
});
