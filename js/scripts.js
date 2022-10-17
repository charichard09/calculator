//business logic
function add(number1, number2) {
  return number1 + number2;
}

function multiNum(number1, number2) {
  return number1 * number2;
}

function subNum(number1, number2) {
  return number1 - number2;
}

function divNum(number1, number2) {
  return number1 / number2;
}

let aboutMe = {
  name: "Richard Cha",
  age: 31,
  likesTunaFish: true,
  favoriteSaying: function() {
    return "SHEEESH";
  }
}

//user interface logic
// const promptNum1 = window.prompt("Please enter number 1:");
// const promptNum2 = window.prompt("Please enter number 2:");

// window.alert(promptNum1 + " + " + promptNum2 +  " = " + add(parseInt(promptNum1), parseInt(promptNum2)) + ", " + promptNum1 + " - " + promptNum2 + " = " + subNum(promptNum1, promptNum2) + ", " + promptNum1 + " * " + promptNum2 + " = " + multiNum(promptNum1, promptNum2) + ", " + promptNum1 + " / " + promptNum2 + " = " + divNum(promptNum1, promptNum2));

window.alert("My name is " + aboutMe.name + ", age " + String(aboutMe.age) + ". The fact that I like Tuna is "
             + String(aboutMe.likesTunaFish) + " and my favorite saying is " + aboutMe.favoriteSaying() + "!!")