const userBirthday = document.querySelector("#user-birthday");
const luckyNumber = document.querySelector("#user-lucky-number");
const checkLuckyBirthday = document.querySelector("#check-lucky-birthday");
const outputMessage = document.querySelector(".output-message");

// Now, find out if sum of digits of birthday is divisible by the lucky number.

checkLuckyBirthday.addEventListener("click", function isBirthdayLucky() {
  console.log(typeof userBirthday.value);
  console.log(typeof luckyNumber.value);
  console.log("Clicked Button");

  const birthDay = userBirthday.value;
  const sumTotal = calculateSum(birthDay);
  const luckyNo = luckyNumber.value;

  if (sumTotal % luckyNo === 0) {
    outputMessage("Your birthday is lucky");
  } else {
    outputMessage("Your birthday is not lucky");
  }
});

function calculateSum(birthDay) {
  let sum = 0;
  birthDay = birthDay.replaceAll("-", "");
  for (i = 0; i < birthDay.length; i++) {
    sum = sum + Number(birthDay.charAt[i]);
    console.log(i);
    console.log(sum);
  }
  return sum;
}

function outputMessage(mssg) {
  outputMessage.style.display = "block";
  outputMessage.innerText = mssg;
}
