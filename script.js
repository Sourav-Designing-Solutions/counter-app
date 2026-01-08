const selectId = document.getElementById.bind(document);
const log = console.log;
const addBtn = selectId("addBtn");
const minusBtn = selectId("minusBtn");
const output = selectId("output");
const input = selectId("input");
const error = selectId("error");

addBtn.addEventListener("click", () => {
  let inputVal = parseInt(input.value);
  let currentVal = parseInt(output.innerText);
  error.style.display = "none";
  error.innerText = "";
  if (inputVal) {
    currentVal += inputVal;
    output.innerText = currentVal;
    input.value = "";
    return;
  }

  currentVal += 1;
  output.innerText = currentVal;
});

minusBtn.addEventListener("click", () => {
  let inputVal = parseInt(input.value);
  let currentVal = parseInt(output.innerText);

  if (currentVal <= 0 || (inputVal && currentVal - inputVal < 0)) {
    error.style.display = "block";
    error.innerText = "The result cannot be less than 0";
    return;
  }
  error.innerText = "";
  error.style.display = "none";
  if (inputVal) {
    currentVal -= inputVal;
    output.innerText = currentVal;
    input.value = "";
    return;
  }
  currentVal -= 1;
  output.innerText = currentVal;
});
