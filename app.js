// factorial program using while loop
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
const calcHcf = () => {
    const num1 = Number(prompt("Enter first number"))
    const num2 = Number(prompt("Enter second number"))
    let biggerNum = 0;
    if (num1 > num2) {
        biggerNum = num1;
    }
    else {
        biggerNum = num2
    }
    let i = biggerNum;
    let hcf = 0;
    while (i !== hcf) {
        if (num1 % i === 0 && num2 % i === 0) {
            hcf = i
        }
        else {
            i--;
        }
    }
    console.log(i)
}
calcHcf()

