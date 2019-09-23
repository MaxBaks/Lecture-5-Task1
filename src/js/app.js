const getItemCount = (income) => {
  try {
    const result = parseInt(income, 10);
    if (Number.isNaN(result)) {
      throw new Error('Неверное количество единиц товара!');
    }
    if (result !== Number(income) || income.charAt(0) === '0') {
      throw new Error('Неверное число!');
    }
    return result;
  } catch (err) {
    return err;
  }
};

export default getItemCount;
