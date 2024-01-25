function calculateSum() {
    let input1Value = parseFloat(document.getElementById('input1').value) || 0;
    let input2Value = parseFloat(document.getElementById('input2').value) || 0;

    document.getElementById('output').value = "Cách 1: " + (input1Value + input2Value);

    let outputElement = document.getElementById('output');
    outputElement.value += "\nCách 2: " + (input1Value + input2Value);
  }