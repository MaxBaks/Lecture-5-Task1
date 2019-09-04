const getItemCount = (itemsCount) => {
  try {
    const result = parseInt(itemsCount, 10);
    if (Number.isNaN(result)) {
      throw new Error('Неверное количество единиц товара!');
    }
    return result;
  } catch (err) {
    return err;
  }
};

export default getItemCount;
