const result = document.getElementById("result");

function appendValue(value) {
  result.value += value;
}

function appendFunction(func) {
  result.value += func;
}

function clearDisplay() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = result.value;
    result.value = eval(expression);
  } catch {
    result.value = "Erro";
  }
}

// Teclado
document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/().".includes(key)) {
    result.value += key;
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
