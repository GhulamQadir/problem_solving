// factorial program using while loop
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
