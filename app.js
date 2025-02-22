// to print factorial of a given number
const calcFactorial = () => {
    let inputNum = Number(prompt("Enter the factorial number"))
    let factorial = inputNum;
    while (inputNum > 1) {
        factorial = factorial * (inputNum - 1)
        inputNum--;
    }
    if (inputNum < 0) {
        console.log("Please enter positive number")
    } else if (inputNum === 0) {
        factorial = 1
        console.log(factorial)
    }
    else {
        console.log(factorial)
    }
}
// calcFactorial()



// to find greatest common divisor(GCD) or HCF
const calcGcd = () => {
    const num1 = Number(prompt("Enter first number"))
    const num2 = Number(prompt("Enter second number"))
    let biggerNum = 0;
    if (num1 >= num2) {
        biggerNum = num1;
    }
    else {
        biggerNum = num2
    }
    let checkNum = biggerNum;
    let hcf = 1;
    if (num1 > 0 && num2 > 0) {
        while (checkNum !== hcf) {
            if (num1 % checkNum === 0 && num2 % checkNum === 0) {
                hcf = checkNum
            }
            else {
                checkNum--;
            }
        }
        console.log(`Greatest common divisor of two given numbers is ${checkNum}`)
    } else {
        console.log("Numbers should not be less than 1")
    }
}
// calcGcd()


// to print divisors of a given number
const calcDivisors = () => {
    const divisorsArray = []
    const divisorNum = Number(prompt("Enter the number of which you want it's divisors"))
    let checkDivNum = 1
    if (divisorNum > 0) {
        while (checkDivNum <= divisorNum) {
            if (divisorNum % checkDivNum === 0) {
                divisorsArray.push(checkDivNum)
            }
            checkDivNum++;
        }
        console.log(`Divisors of a given number are ${divisorsArray}`)
    }
    else {
        console.log("Number should not be less than 1")
    }
}
// calcDivisors()


// to print common divisors of two given numbers
const commonDivisors = () => {
    const num1 = Number(prompt("Enter first number"))
    const num2 = Number(prompt("Enter second number"))
    const commonDivArray = []
    let smallerNum = 0;
    let checkDivNum = 1

    if (num1 <= num2) {
        smallerNum = num1
    }
    else {
        smallerNum = num2
    }

    if (num1 > 0 && num2 > 0) {
        while (checkDivNum <= smallerNum) {
            const checkNum1 = num1 % checkDivNum;
            const checkNum2 = num2 % checkDivNum;
            if (checkNum1 === 0 && checkNum2 === 0) {
                commonDivArray.push(checkDivNum)
            }
            checkDivNum++
        }
        console.log(`Common divisors of two given numbers are ${commonDivArray}`)
    } else {
        console.log("Numbers should not be less than 1")
    }
}
// commonDivisors()