const sum = require('../src/math');

test('add 1 + 2 igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('add -1 + 1 va ser igual a 0', () => {
  expect(sum(-1, 1)).toBe(0);
});

// test que falla
// test('add 5 + 7 va a ser 9, Debe fallar', () => {
//   expect(sum(5, 7)).toBe(9);
// });