const btnOne = document.querySelector(".btn-clear");
const btnTwo = document.querySelector(".btn-backspace");
const btnThree = document.querySelector(".btn-divide");
const btnFour = document.querySelector(".btn-seven");
const btnFive = document.querySelector(".btn-eight");
const btnSix = document.querySelector(".btn-nine");
const btnSeven = document.querySelector(".btn-multiply");
const btnEight = document.querySelector(".btn-four");
const btnNine = document.querySelector(".btn-five");
const btnTen = document.querySelector(".btn-six");
const btnEleven = document.querySelector(".btn-subtract");
const btnTwelve = document.querySelector(".btn-one");
const btnThirteen = document.querySelector(".btn-two");
const btnFourteen = document.querySelector(".btn-three");
const btnFifteen = document.querySelector(".btn-add");
const btnSixteen = document.querySelector(".btn-decimal");
const btnSeventeen = document.querySelector(".btn-zero");
const btnEighteen = document.querySelector(".btn-equals");

const inputField = document.querySelector(".display");

btnOne.addEventListener("click", function () {
  inputField.value = "";
});

btnTwo.addEventListener("click", function () {
  inputField.value = inputField.value.slice(0, -1);
});

btnThree.addEventListener("click", function () {
  inputField.value += "/";
});

btnFour.addEventListener("click", function () {
  inputField.value += "7";
});

btnFive.addEventListener("click", function () {
  inputField.value += "8";
});

btnSix.addEventListener("click", function () {
  inputField.value += "9";
});

btnSeven.addEventListener("click", function () {
  inputField.value += "*";
});

btnEight.addEventListener("click", function () {
  inputField.value += "4";
});

btnNine.addEventListener("click", function () {
  inputField.value += "5";
});

btnTen.addEventListener("click", function () {
  inputField.value += "6";
});

btnEleven.addEventListener("click", function () {
  inputField.value += "-";
});

btnTwelve.addEventListener("click", function () {
  inputField.value += "1";
});

btnThirteen.addEventListener("click", function () {
  inputField.value += "2";
});

btnFourteen.addEventListener("click", function () {
  inputField.value += "3";
});

btnFifteen.addEventListener("click", function () {
  inputField.value += "+";
});

btnSixteen.addEventListener("click", function () {
  inputField.value += ".";
});

btnSeventeen.addEventListener("click", function () {
  inputField.value += "0";
});

btnEighteen.addEventListener("click", function () {
  try {
    inputField.value = calculate(inputField.value);
  } catch {
    inputField.value = "Error";
  }
});

function calculate(expression) {
  const tokens = expression.split(/([+\-*/])/);
  let result = parseFloat(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const nextNumber = parseFloat(tokens[i + 1]);

    if (operator === "+") result += nextNumber;
    else if (operator === "-") result -= nextNumber;
    else if (operator === "*") result *= nextNumber;
    else if (operator === "/") result /= nextNumber;
  }

  return result;
}
