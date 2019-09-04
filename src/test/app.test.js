import getItemCount from '../js/app';

test('for correct count should return itself', () => {
  const expected = 90;
  const result = getItemCount('90');

  expect(result).toBe(expected);
});

test('for invalid count should return error', () => {
  const expected = Error('Неверное количество единиц товара!');
  const result = getItemCount();

  expect(result).toEqual(expected);
});
