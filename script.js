function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function operator(op, a, b){
    switch (op){
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}
var currentValue = 0;
var screenContent = document.querySelector("#content");
var temp = 0;
screenContent.textContent = currentValue;
function displayNumbers(n){
    if (currentValue == 0){
        currentValue = parseInt(n.target.id);
    } else {
        currentValue = currentValue * 10 + parseInt(n.target.id);
    }
    screenContent.textContent = currentValue;
}
const btn = document.getElementsByClassName("number");
console.log(btn);
for (let i = 0, l = btn.length; i < l; i++){
    btn[i].addEventListener("click", displayNumbers);
}
function clearScreen() {
    currentValue = 0;
    screenContent.textContent = parseInt(currentValue);
}
const ops = document.getElementsByClassName("operator");
for (let i = 0, l = ops.length; i < l; i++){
    ops[i].addEventListener("click", function(e){
        if (temp === 0){
            temp = parseInt(currentValue);
            clearScreen();
        }
        else {
            currentValue = operator(e.target.id, parseInt(temp), parseInt(currentValue));
            screenContent.textContent = parseInt(currentValue);
            temp = 0;
        }
    });
}
console.log(ops)