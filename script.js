let display = document.getElementById("display");

//let holdTimer = null;

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

function addOperator(op) {
    if (display.value === "" && op !== "-") return;

    let lastChar = display.value.slice(-1);

    if (operators.includes(lastChar)){
        display.value = display.value.slice(0. -1) - op;
        return;
    }
    display.value += op
}

/*document.addEventListener("keydown", function(event) {
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

if(operators.includes(key)){
    let lastChar = display.value.slice(-1);
    if(display.value === "" || operators.includes(lastChar)) return;
     display.value += key;
}

if(key === "Enter") {
    event.preventDefault();
    document.activeElement.blur();
    calculateResult();
}

else if(key === "Backspace") {
    event.preventDefault();

    if (event.repeat) return;
    
    deleteLast();

if (!holdTimer) {
    holdTimer = setTimeout(()=> {
        clearDisplay();
    }, 600);
}
}
});

document.addEventListener("keyup", function(event) {
if (event.key === "Backspace") {
    clearTimeout(holdTimer);
 holdTimer = null;
}
});*/