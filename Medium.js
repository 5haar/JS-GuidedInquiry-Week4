const input = window.prompt("Enter a number between 1-12:");
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function monthInput(x) {
  return months[Number(x) - 1];
}

if (input < 1 || input > 12) {
  console.log(`You entered an invalid value.`);
  alert(`You entered an invalid value.`);
} else {
  console.log(monthInput(input));
}
