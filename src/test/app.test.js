import getItemCount from '../js/app';

test('for correct count should return itself', () => {
  const expected = 90;
  const result = getItemCount('90');

  expect(result).toBe(expected);
});

test('for invalid count should return error', () => {
  const expected = Error('Неверное количество единиц товара!');
  const result = getItemCount('fdsfdsf');

  expect(result).toEqual(expected);
});

test('for binary should return error', () => {
  const expected = Error('Неверное число!');
  const result = getItemCount('0b10000000000000000000000000000000');

  expect(result).toEqual(expected);
});

test('for octal should return error', () => {
  const expected = Error('Неверное число!');
  const result = getItemCount('0755');

  expect(result).toEqual(expected);
});

test('for hex should return error', () => {
  const expected = Error('Неверное число!');
  const result = getItemCount('0XA');

  expect(result).toEqual(expected);
});
