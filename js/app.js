function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  const displayPin = document.getElementById("display-pin");
  displayPin.value = pin;
});
document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typedNumber = document.getElementById("typed-number");
    const previousTypedNumber = typedNumber.value;
    if (isNaN(number)) {
      if (number === "C") {
        typedNumber.value = "";
      } else if (number === "<") {
        const digits = previousTypedNumber.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        typedNumber.value = remainingDigits;
      }
    } else {
      const previousTypedNumber = typedNumber.value;
      const newTypedNumber = previousTypedNumber + number;
      typedNumber.value = newTypedNumber;
    }
  });
