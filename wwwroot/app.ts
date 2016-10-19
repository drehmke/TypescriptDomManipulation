let num1 = <HTMLInputElement>document.getElementById(`num1`);
let num2 = <HTMLInputElement>document.getElementById(`num2`);

let btnAdd = <HTMLButtonElement>document.getElementById('add');
let btnSubtract = <HTMLButtonElement>document.getElementById('subtract');
let btnMulitply = <HTMLButtonElement>document.getElementById('multiply');
let btnDivide = <HTMLButtonElement>document.getElementById('divide');

btnAdd.addEventListener(`click`, () => {
    console.log(`The sum of ${num1.value} and ${num2.value} is ${parseFloat(num1.value) + parseFloat(num2.value)}`);
});

btnSubtract.addEventListener(`click`, () => {
    console.log(`The difference of ${num1.value} and ${num2.value} is ${parseFloat(num1.value) - parseFloat(num2.value)}`);
});

btnMulitply.addEventListener(`click`, () => {
    console.log(`The product of ${num1.value} and ${num2.value} is ${parseFloat(num1.value) * parseFloat(num2.value)}`);
});

btnDivide.addEventListener(`click`, () => {
    console.log(`The remainder of ${num1.value} and ${num2.value} is ${parseFloat(num1.value) / parseFloat(num2.value)}`);
});
