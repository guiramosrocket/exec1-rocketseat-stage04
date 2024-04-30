function getNumbersFromUser() {
  const numberOne = Number(prompt("Digite o número 1"));
  const numberTwo = Number(prompt("Digite o número 2"));

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    throw new Error("Por favor, insira números válidos.");
  }

  return { numberOne, numberTwo };
}

function calculate(numberOne, numberTwo) {
  const sum = numberOne + numberTwo;
  const sub = numberOne - numberTwo;
  const multi = numberOne * numberTwo;
  const div = numberOne / numberTwo;
  const resDiv = numberOne % numberTwo;
  const isSumEven = sum % 2 === 0;
  const isSameNumber = numberOne === numberTwo;
  return { sum, sub, multi, div, resDiv, isSumEven, isSameNumber };
}

function displayResults(results) {
  alert(`Soma: ${results.sum}`);
  alert(`Subtração: ${results.sub}`);
  alert(`Multiplicação: ${results.multi}`);
  alert(`Divisão: ${results.div}`);
  alert(`Resto da divisão: ${results.resDiv}`);

  if (results.isSumEven) {
    alert("A soma dos números é par.");
  } else {
    alert("A soma dos números é ímpar.");
  }

  if (results.isSameNumber) {
    alert("Os números inseridos são iguais");
  } else {
    alert("Os números inseridos são diferentes");
  }
}

function app() {
  let validInput = false;
  let numberOne, numberTwo;

  try {
    do {
      const { numberOne: inputOne, numberTwo: inputTwo } = getNumbersFromUser();
      numberOne = inputOne;
      numberTwo = inputTwo;
      validInput = true;
    } while (!validInput);
  } catch (error) {
    alert(error.message);
    return; // Encerra a execução do programa se houver um erro
  }

  const results = calculate(numberOne, numberTwo);
  displayResults(results);
}

app();
