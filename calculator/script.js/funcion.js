const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function appendValue(val) {
  display.textContent += val;
}

function clearDisplay() {
  display.textContent = "";
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1);
}

function calculateResult() {
  let expression = display.textContent
    .replace(/π/g, "Math.PI")
    .replace(/sqrt\(/g, "Math.sqrt(")
    .replace(/sin\(/g, "Math.sin(")
    .replace(/cos\(/g, "Math.cos(")
    .replace(/tan\(/g, "Math.tan(")
    .replace(/log\(/g, "Math.log10(")
    .replace(/ln\(/g, "Math.log(")
    .replace(/e/g, "Math.E")
    .replace(/\^/g, "**");

  try {
    const result = eval(expression);
    historyList.innerHTML = `<li>${display.textContent} = ${result}</li>` + historyList.innerHTML;
    display.textContent = result;
  } catch (e) {
    display.textContent = "Error";
  }
}
