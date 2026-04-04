let display = document.getElementById("display");

const operators = ["+", "-", "/", "*", "%"];

function press(value) {
    let lastChar = display.value.slice(-1);

  let parts = display.value.split(/[\+\-\*\/%]/);
  let lastNumber = parts[parts.length - 1];

  if (lastNumber === "0" && value === "0") {
    return;
  }

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
  let val = display.value;
  let lastChar = val.slice(-1);

  if (val === "") {
    if (op === "-") display.value = "-";
    return;
  }

  if (operators.includes(lastChar)) {

    if (op === "-") {

      if (lastChar === "-") return;

      display.value += "-";
    }

    return;
  }

  display.value += op;
}
function addDecimal() {
  let val = display.value;
  let lastChar = val.slice(-1);

  if (val === "") {
    display.value = "0.";
    return;
  }

  if (operators.includes(lastChar)) {
    display.value += "0.";
    return;
  }

  let parts = val.split(/[\+\-\*\/%]/);
  let lastNumber = parts[parts.length - 1];

  if (lastNumber.includes(".")) {
    return;
  }

  display.value += ".";
}