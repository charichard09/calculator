//business logic
function add(number1, number2) {
  return number1 + number2;
}

//user interface logic
window.alert(add(parseInt(window.prompt("Enter a number:")), parseInt(window.prompt("Enter another number:"))))