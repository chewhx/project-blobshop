const generatePrice = () => {
  // random 1 or 5 digit number
  const random = Math.floor(Math.random() * 5) + 1;
  // create an array with digit number of elements + 2 (for cents)
  let n = 0;
  let array = [];
  while (n < random) {
    array[n] = 0;
    n++;
  }
  array.push(".");
  array.push(0);
  array.push(0);
  // for each element, in array, generate a random number of 1-9
  array.map((each, idx) => {
    if (each === 0) {
      array[idx] = Math.floor(Math.random() * 9) + 1;
    }
  });
  // return joined elements of array in number format
  return Number(array.join(""));
};

export default generatePrice;
