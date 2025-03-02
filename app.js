// to print factorial of a given number
const calcFactorial = () => {
  let inputNum = Number(prompt("Enter the factorial number"));
  let factorial = inputNum;
  if (inputNum < 0) {
    console.log("Please enter a positive number");
  } else {
    while (inputNum > 1) {
      factorial = factorial * (inputNum - 1);
      inputNum--;
    }
    if (inputNum === 0) {
      factorial = 1;
    }
    console.log(`Factorial of a given number is: ${factorial}`);
  }
};
// calcFactorial()



// to find greatest common divisor(GCD) or HCF
const calcGcd = () => {
  const num1 = Number(prompt("Enter first number"));
  const num2 = Number(prompt("Enter second number"));
  let biggerNum = 0;
  if (num1 >= num2) {
    biggerNum = num1;
  } else {
    biggerNum = num2;
  }
  let checkNum = biggerNum;
  let hcf = 1;
  if (num1 > 0 && num2 > 0) {
    while (checkNum !== hcf) {
      if (num1 % checkNum === 0 && num2 % checkNum === 0) {
        hcf = checkNum;
      } else {
        checkNum--;
      }
    }
    console.log(`Greatest common divisor of two given numbers is ${checkNum}`);
  } else {
    console.log("Numbers should not be less than 1");
  }
};
// calcGcd()



// to print divisors of a given number
const calcDivisors = () => {
  const divisorsArray = [];
  const divisorNum = Number(
    prompt("Enter the number of which you want it's divisors")
  );
  let checkDivNum = 1;
  if (divisorNum > 0) {
    while (checkDivNum <= divisorNum) {
      if (divisorNum % checkDivNum === 0) {
        divisorsArray.push(checkDivNum);
      }
      checkDivNum++;
    }
    console.log(`Divisors of a given number are ${divisorsArray}`);
  } else {
    console.log("Number should not be less than 1");
  }
};
// calcDivisors()



// to print common divisors of two given numbers
const commonDivisors = () => {
  const num1 = Number(prompt("Enter first number"));
  const num2 = Number(prompt("Enter second number"));
  const commonDivArray = [];
  let smallerNum = 0;
  let checkDivNum = 1;

  if (num1 <= num2) {
    smallerNum = num1;
  } else {
    smallerNum = num2;
  }

  if (num1 > 0 && num2 > 0) {
    while (checkDivNum <= smallerNum) {
      const checkNum1 = num1 % checkDivNum;
      const checkNum2 = num2 % checkDivNum;
      if (checkNum1 === 0 && checkNum2 === 0) {
        commonDivArray.push(checkDivNum);
      }
      checkDivNum++;
    }
    console.log(`Common divisors of two given numbers are ${commonDivArray}`);
  } else {
    console.log("Numbers should not be less than 1");
  }
};
// commonDivisors()



// to find total population and average
const findPopAndAverage = () => {
  const populationArr = [300, 50, 3, 8, 0, 1004];
  let i = 0;
  let totalPop = 0;
  let totalNoOfInputs = 0;
  const lengthOfPopArr = populationArr.length;
  while (i <= lengthOfPopArr - 1) {
    totalPop += populationArr[i];
    if (populationArr[i] > 0) {
      totalNoOfInputs++;
    }
    i++;
    console.log(totalPop);
  }
  console.log(`Total population is: ${totalPop}`);

  const averagePop = totalPop / totalNoOfInputs;
  console.log(`Average population is: ${averagePop}`);
};
// findPopAndAverage()



// find LCM (least common multiple) of two given numbers;
const findLCM = () => {
  const num1 = Number(prompt("Enter first number"));
  const num2 = Number(prompt("Enter second number"));
  let biggerNum = 0;
  let lcm = 0;
  if (num1 >= num2) {
    biggerNum = num1;
  } else {
    biggerNum = num2;
  }
  let checkingNum = biggerNum;

  if (num1 > 0 && num2 > 0) {
    while (lcm !== checkingNum) {
      if (checkingNum % num1 === 0 && checkingNum % num2 === 0) {
        lcm = checkingNum;
      } else {
        checkingNum++;
      }
    }
    console.log(`LCM of given numbers is: ${lcm}`);
  } else {
    console.log("Numbers should be greater than 0");
  }
};
// findLCM()



// utilize gift voucher
const giftVoucher = (amount) => {
  const voucherAmount = amount;
  let purchaseAmount = 0;

  while (purchaseAmount < voucherAmount) {
    const productAmount = Number(prompt("Enter the amount of product"));
    purchaseAmount += productAmount;
  }
  if (purchaseAmount > voucherAmount) {
    console.log(
      `Purchase Amount: ${purchaseAmount}\nYour total amount is greater than gift voucher amount`
    );
  } else {
    console.log("You have utilized your voucher");
  }
};
// giftVoucher(200)



// total amount after discount
const discountedPrice = () => {
  const sellingPrice = Number(prompt("Enter the selling price"));
  const discountedPercentage = Number(
    prompt("Enter the discounted percentage")
  );
  const discountedAmount = sellingPrice * (discountedPercentage / 100);
  const discountedPrice = sellingPrice - discountedAmount;
  console.log(`Your amount after discount is ${discountedPrice}`);
};
// discountedPrice()



// find lcm and hcf both
const calcGcdAndLcm = () => {
  const num1 = Number(prompt("Enter first number"));
  const num2 = Number(prompt("Enter second number"));
  let biggerNum = 0;
  if (num1 >= num2) {
    biggerNum = num1;
  } else {
    biggerNum = num2;
  }
  let checkGcdNum = biggerNum;
  let hcf = 1;

  let lcm = 1;
  let checkLcmNum = biggerNum;
  if (num1 > 0 && num2 > 0) {
    while (hcf !== checkGcdNum || lcm !== checkLcmNum) {
      if (num1 % checkGcdNum === 0 && num2 % checkGcdNum === 0) {
        hcf = checkGcdNum;
        if (checkLcmNum % num1 === 0 && checkLcmNum % num2 === 0) {
          lcm = checkLcmNum;
        } else {
          checkLcmNum++;
        }
      } else {
        checkGcdNum--;
      }
    }
    console.log(
      `Greatest common divisor of two given numbers is ${hcf} and LCM is ${lcm}`
    );
  } else {
    console.log("Numbers should not be less than 1");
  }
};
// calcGcdAndLcm()



// take the month and date as input and print day of the week (only for 2025)
// "first january 2025 was on Wednesday"
const printDayOfTheWeek = () => {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weekDays = [
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
  ];
  const inputMonth = Number(
    prompt(
      "Enter number of the month\n(Example, for March, enter 3 because it is the third month of the year)"
    )
  );
  const inputDateOfTheMonth = Number(
    prompt("Enter date of the month\n(Like this: 27)")
  );

  let i = 0;
  let totalDays = 0;
  if (
    inputMonth > 12 ||
    inputDateOfTheMonth > daysInMonth[inputMonth - 1] ||
    inputDateOfTheMonth < 1 ||
    inputMonth < 1
  ) {
    console.log("Incorrect number of days or month");
  } else {
    while (i < inputMonth - 1) {
      totalDays += daysInMonth[i];
      i++;
    }
    totalDays += inputDateOfTheMonth;
    const weekDayNum = totalDays % 7;
    const getDayOfTheWeek = weekDays[weekDayNum - 1];
    console.log(`Day of the week is ${getDayOfTheWeek}`);
  }
};
// printDayOfTheWeek()



// Split each word of sentence in new line (without using split method)
const splitSentence = () => {
  const sentence = prompt("Enter any sentence to split");
  let word = "";
  let index = 0;
  const sentenceLength = sentence.length;
  while (index < sentenceLength) {
    if (sentence[index] == " ") {
      if (word !== "") {
        console.log(word);
        word = "";
      }
    } else {
      word += sentence[index];
      if (index === sentenceLength - 1) {
        console.log(word);
      }
    }
    index++;
  }
};
// splitSentence();



// input one digit as string and print its twice(don't use integer conversion functions)
const twiceOfDigitAsChar = () => {
  const char = prompt("Enter any integral character");
  if (char !== "") {
    const charCode = char.charCodeAt(0);
    const twiceOfChar = (charCode - 48) * 2;
    console.log(`The twice of given character is ${twiceOfChar}`);
  }
};
// twiceOfDigitAsChar()


// take input as integer number as string and print sum of all digits like("2030" = 2+0+3+0)
const sumOfIntegersAsString = () => {
  const string = prompt("Enter integer digits as string")
  const stringLength = string.length;
  let i = 0;
  let sumOfDigits = 0;
  if (string.length) {
    while (i < stringLength) {
      const charCode = string.charCodeAt(i)
      let charVal = charCode - 48
      sumOfDigits += charVal
      i++;
    }
    console.log(`Sum of digits is: ${sumOfDigits}`)
  } else {
    console.log("Enter digits")
  }
}
sumOfIntegersAsString()



// take one alphabet as input in uppercase and print its lowercase letter
const printCapitalLetter = () => {
  const alphabet = prompt("Enter any alphabet in uppercase");
  const getChar = alphabet.charCodeAt(0);
  const newCode = getChar + 32
  const lowerCaseAlphabet = String.fromCharCode(newCode);
  console.log(`Lowercase of given character is: ${lowerCaseAlphabet}`);
};
// printCapitalLetter();
