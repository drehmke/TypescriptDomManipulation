var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var btnAdd = document.getElementById('add');
var btnSubtract = document.getElementById('subtract');
var btnMulitply = document.getElementById('multiply');
var btnDivide = document.getElementById('divide');
btnAdd.addEventListener("click", function () {
    console.log("The sum of " + num1.value + " and " + num2.value + " is " + (parseFloat(num1.value) + parseFloat(num2.value)));
});
btnSubtract.addEventListener("click", function () {
    console.log("The difference of " + num1.value + " and " + num2.value + " is " + (parseFloat(num1.value) - parseFloat(num2.value)));
});
btnMulitply.addEventListener("click", function () {
    console.log("The product of " + num1.value + " and " + num2.value + " is " + parseFloat(num1.value) * parseFloat(num2.value));
});
btnDivide.addEventListener("click", function () {
    console.log("The remainder of " + num1.value + " and " + num2.value + " is " + parseFloat(num1.value) / parseFloat(num2.value));
});
