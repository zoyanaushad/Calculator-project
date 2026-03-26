let display = document.getElementById("display");

let isBackspaceHeld = false;

const operators = ["+", "-", "/", "*", "%"];

function press(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    display.value = eval(display.value);
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", function(event) {
    let key = event.key;

if (!isNaN(key) || key === ".") {
    display.value += key;
}

if(operators.includes(key)) {
    const lastChar = display.value.slice(-1);

if(display.value === "" || operators.includes(lastChar)) return;

display.value += key;
}

if(key === "-" && display.value === "") {
    display.value += key;
    return;
}

else if(operators.includes(key)){
    let lastChar = display.value.slice(-1);
    if(display.value === "" || operators.includes(lastChar)) return;
     display.value += key;
}

else if(key === "Enter") {
    calculateResult();
}

else if(key === "Backspace") {
    if (isBackspaceHeld) returns;
    isBackspaceHeld = true;
    deleteLast();
}
});

document.addEventListener("keyup", function(event) {
    if (event.key === "Backspace") {
        Backspace = false;
    }
});