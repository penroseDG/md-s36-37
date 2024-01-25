let userInputValue = "";

function updateOutputs() {
  userInputValue = document.getElementById('userInput').value;
  document.getElementById('output1').innerText = "Output 1: " + userInputValue;

  let output2 = document.getElementById('output2');
  output2.innerText = "Output 2: " + userInputValue;
}