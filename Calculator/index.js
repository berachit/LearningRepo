const displayScreen = document.getElementById("displayScreen");
const clearBtn = document.getElementById("clear");
const openPBtn = document.getElementById("openP");
const closePBtn = document.getElementById("closeP");
const divideBtn = document.getElementById("divide");
const multiBtn = document.getElementById("mult");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const zeroBtn = document.getElementById("zero");
const decimalBtn = document.getElementById("decimal");
const equalBtn = document.getElementById("equal");
const backspaceBtn = document.getElementById("backspace");

let screenDisplay = "";

oneBtn.onclick = function () {
  screenDisplay += "1";
  displayScreen.textContent = screenDisplay;
};
twoBtn.onclick = function () {
  screenDisplay += "2";
  displayScreen.textContent = screenDisplay;
};
threeBtn.onclick = function () {
  screenDisplay += "3";
  displayScreen.textContent = screenDisplay;
};
fourBtn.onclick = function () {
  screenDisplay += "4";
  displayScreen.textContent = screenDisplay;
};
fiveBtn.onclick = function () {
  screenDisplay += "5";
  displayScreen.textContent = screenDisplay;
};
sixBtn.onclick = function () {
  screenDisplay += "6";
  displayScreen.textContent = screenDisplay;
};
sevenBtn.onclick = function () {
  screenDisplay += "7";
  displayScreen.textContent = screenDisplay;
};
eightBtn.onclick = function () {
  screenDisplay += "8";
  displayScreen.textContent = screenDisplay;
};
nineBtn.onclick = function () {
  screenDisplay += "9";
  displayScreen.textContent = screenDisplay;
};
zeroBtn.onclick = function () {
  screenDisplay += "0";
  displayScreen.textContent = screenDisplay;
};
multiBtn.onclick = function () {
  screenDisplay += "x";
  displayScreen.textContent = screenDisplay;
};
divideBtn.onclick = function () {
  screenDisplay += "/";
  displayScreen.textContent = screenDisplay;
};
plusBtn.onclick = function () {
  screenDisplay += "+";
  displayScreen.textContent = screenDisplay;
};
minusBtn.onclick = function () {
  screenDisplay += "-";
  displayScreen.textContent = screenDisplay;
};
openPBtn.onclick = function () {
  screenDisplay += "(";
  displayScreen.textContent = screenDisplay;
};
closePBtn.onclick = function () {
  screenDisplay += ")";
  displayScreen.textContent = screenDisplay;
};
clearBtn.onclick = function () {
  screenDisplay = "";
  displayScreen.textContent = screenDisplay;
};
backspaceBtn.onclick = function () {
  let length = screenDisplay.length;
  screenDisplay = screenDisplay.slice(0, length - 1);
  displayScreen.textContent = screenDisplay;
};
decimalBtn.onclick = function () {
  screenDisplay += ".";
  displayScreen.textContent = screenDisplay;
};


equalBtn.onclick = function () {
//   for (let i = 0; i < screenDisplay.length; i++) {
//     if (
//       screenDisplay.charAt(i) == "+" ||
//       screenDisplay.charAt(i) == "-" ||
//       screenDisplay.charAt(i) == "/" ||
//       screenDisplay.charAt(i) == "x"
//     ) {
//       if (
//         screenDisplay.charAt(i + 1) == "+" ||
//         screenDisplay.charAt(i + 1) == "-" ||
//         screenDisplay.charAt(i + 1) == "/" ||
//         screenDisplay.charAt(i + 1) == "x"
//       ) {
//         // screenDisplay = 'Math Error';
//         // displayScreen.textContent = screenDisplay;
//         window.alert("Math Error!!!");
//         screenDisplay = "";
//       }
//     }
//   }
//   if (
//     screenDisplay.charAt(0) == "+" ||
//     screenDisplay.charAt(0) == "-" ||
//     screenDisplay.charAt(0) == "/" ||
//     screenDisplay.charAt(0) == "x"
//   ) {
//     window.alert("Math Error");
//     screenDisplay = "";
//   }
  let openCount = 0;
  let closeCount = 0;
  for (let ch of screenDisplay) {
    if (ch === "(") openCount++;
    if (ch === ")") closeCount++;
  }
  if (openCount !== closeCount) {
    alert("Mismatched parentheses!");
    return;
  }

  try {
    let expression = screenDisplay.replace(/x/g, "*");
    let result = eval(expression);
    result = Math.round(result * 10000) / 10000;
    displayScreen.textContent = result;
    screenDisplay = result.toString(); 
  } catch (e) {
    alert("Invalid expression!");
    screenDisplay = "";
    displayScreen.textContent = screenDisplay;
  }
};
