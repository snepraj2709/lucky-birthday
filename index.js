const userBirthday = document.querySelector("#user-birthday");
const luckyNumber = document.querySelector("#user-lucky-number");
const checkLuckyBirthday = document.querySelector("#check-button");
const outputMessage = document.querySelector(".output-message");

// Now, find out if sum of digits of birthday is divisible by the lucky number.

checkLuckyBirthday.addEventListener("click", function isBirthdayLucky() {
  const birthDay = userBirthday.value;
  const luckyNo = luckyNumber.value;

  if (birthDay & luckyNo) {
    const sumTotal = calculateSum(birthDay);
    if (sumTotal % luckyNo === 0) {
      printMessage("Your birthday is lucky 💃");
    } else {
      printMessage("Your birthday is not lucky 👻");
    }
  } else {
    printMessage("Please enter both the numbers 🙄");
  }
});

function calculateSum(birthDay) {
  let sum = 0;
  birthDay = birthDay.replaceAll("-", "");
  for (i = 0; i < birthDay.length; i++) {
    sum = sum + Number(birthDay.charAt(i));
  }
  console.log(sum);
  return sum;
}

function printMessage(mssg) {
  outputMessage.style.display = "block";
  outputMessage.innerText = mssg;
}
