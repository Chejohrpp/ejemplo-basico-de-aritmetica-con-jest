const sum = require('../src/math');

test('add 1 + 2 igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('add -1 + 1 va ser igual a 0', () => {
  expect(sum(-1, 1)).toBe(0);
});
