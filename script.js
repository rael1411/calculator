function add(a, b){
    return a + b;
}
function subtract(a, b){
    return parseFloat(a - b);
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
    //if (writeable){
        if (currentValue == 0){
            currentValue = parseFloat(n.target.id);
        } else {
            currentValue = parseFloat(currentValue) * 10 + parseFloat(n.target.id);
        }
        screenContent.textContent = currentValue;
    //}
}
const btn = document.getElementsByClassName("number");
for (let i = 0, l = btn.length; i < l; i++){
    btn[i].addEventListener("click", displayNumbers);
}
//this clears the screen
function clearScreen() {
    currentValue = 0;
    screenContent.textContent = parseFloat(currentValue);
}
var sign = "empty";
const ops = document.getElementsByClassName("operator");
// this adds the numbers buttons functionality
for (let i = 0, l = ops.length; i < l; i++){
    ops[i].addEventListener("click", function(e){
        if (temp === 0){
            temp = parseFloat(currentValue);
            clearScreen();
            sign = e.target.id;
        }
        else {
            currentValue = operator(sign, parseFloat(temp), parseFloat(currentValue));
            screenContent.textContent = parseFloat(currentValue).toFixed(2);
            sign = e.target.id;
            temp = currentValue;
            currentValue = 0;
            writeable = false;
        }
    });
}
const clear = document.getElementById("clear");
clear.addEventListener("click", clearScreen);
clear.addEventListener("click", () => {
    currentValue = 0;
    temp = 0;
});

const equal = document.getElementById("equals");
equal.addEventListener("click", () => {
    if (sign != "empty"){
        currentValue = operator(sign, parseFloat(temp), parseFloat(currentValue));
        screenContent.textContent = parseFloat(currentValue).toFixed(2);
        currentValue = 0;
        temp = 0;
        writeable = true;
    }
});
var writeable = true;
