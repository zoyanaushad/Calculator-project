let display = document.getElementById("display");

//let holdTimer = null;

const operators = ["+", "-", "/", "*", "%"];

function press(value) {
    let lastChar = display.value.slice(-1);

  // get last number
  let parts = display.value.split(/[\+\-\*\/%]/);
  let lastNumber = parts[parts.length - 1];

  // block multiple leading zeros
  if (lastNumber === "0" && value === "0") {
    return;
  }

  // replace 0 with number (e.g. 0 → 5)
  if (lastNumber === "0" && value !== "0" && value !== ".") {
    display.value = val.slice(0, -1) + value;
    return;
  }

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
  display.value = eval(display.value);
}
 catch {
  display.value = "Error";
}
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function addOperator(op) {
  let lastChar = display.value.slice(-1);

  // allow only "-" at start
  if (display.value === "") {
    if (op === "-") {
      display.value += op;
    }
    return;
  }

  // block if last is operator
  if (operators.includes(lastChar)) {

    if (op === "-") {
      display.value += "-";
    }

    return;
  }

  // add operator
  display.value += op;
}
// 🔹 Decimal
function addDecimal() {
  let val = display.value;
  let lastChar = val.slice(-1);

  // start with 0.
  if (val === "") {
    display.value = "0.";
    return;
  }

  // after operator → add 0.
  if (operators.includes(lastChar)) {
    display.value += "0.";
    return;
  }

  // get last number
  let parts = val.split(/[\+\-\*\/%]/);
  let lastNumber = parts[parts.length - 1];

  // block multiple decimals
  if (lastNumber.includes(".")) {
    return;
  }

  display.value += ".";
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