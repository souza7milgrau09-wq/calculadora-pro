const result = document.getElementById("result");
let isDegree = true;

function appendValue(value) {
  result.value += value;
}

function clearDisplay() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function toggleMode() {
  document.body.classList.toggle("light");
}

function toggleAngle() {
  isDegree = !isDegree;
  document.getElementById("angleMode").innerText = isDegree ? "DEG" : "RAD";
}

function calculate() {
  try {
    let expression = result.value;

    expression = expression.replace(/π/g, "Math.PI");
    expression = expression.replace(/√/g, "Math.sqrt");
    expression = expression.replace(/log/g, "Math.log10");

    expression = expression.replace(/sin\((.*?)\)/g, (_, value) => {
      return `Math.sin(${isDegree ? `(${value})*Math.PI/180` : value})`;
    });

    expression = expression.replace(/cos\((.*?)\)/g, (_, value) => {
      return `Math.cos(${isDegree ? `(${value})*Math.PI/180` : value})`;
    });

    expression = expression.replace(/tan\((.*?)\)/g, (_, value) => {
      return `Math.tan(${isDegree ? `(${value})*Math.PI/180` : value})`;
    });

    const safeFunction = new Function(`return ${expression}`);
    result.value = safeFunction();

  } catch {
    result.value = "Erro";
  }
}

// Teclado
document.addEventListener("keydown", function(e) {
  if (!isNaN(e.key) || "+-*/().".includes(e.key)) {
    result.value += e.key;
  }
  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") deleteLast();
  if (e.key === "Escape") clearDisplay();
});
