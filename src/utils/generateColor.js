const generateColor = () => {
  const letters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let times = 1;
  let results = "";
  while (times <= 6) {
    results += letters[Math.floor(Math.random() * letters.length)];
    times++;
  }
  return results;
};

export default generateColor;
