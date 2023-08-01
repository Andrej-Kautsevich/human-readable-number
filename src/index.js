module.exports = function toReadable(number) {
  const numbersNames = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
  };

  const dozensName = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  };

  let result = "";

  switch (number.toString().length) {
    case 3:
      result = `${numbersNames[Math.floor(number / 100)]} hundred`;
    case 2:
      if (number % 100 <= 19) {
        result = `${result} ${numbersNames[number % 100]}`;
        break;
      } else {
        result = `${result} ${dozensName[Math.floor((number % 100) / 10)]}`;
      }
    case 1:
      if (number === 0) {
        result = 'zero';
      };
      result = `${result} ${numbersNames[Math.floor((number % 100) % 10)]}`;
  };
  return result.trim();
};
