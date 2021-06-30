//Feature 1
let now = new Date();
console.log(now);
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
console.log(day);
let hour = ("0" + now.getHours()).slice(-2);
console.log(hour);
let minute = ("0" + now.getMinutes()).slice(-2);
console.log(minute);
let current = `${day} ${hour}:${minute}`;
console.log(current);
let headingFive = document.querySelector("h5 mark");
headingFive.innerHTML = current;

//Feature 2
let form = document.createElement("form");
let span = document.querySelector(".search-button");
span.appendChild(form);
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Type a City");
form.appendChild(input);
let button = document.querySelector("button");
form.appendChild(button);

function displayCity(event) {
  event.preventDefault();
  let city = document.querySelector("input").value;
  let headingTwo = document.querySelector("h2 mark");
  headingTwo.innerHTML = city;
}
button.addEventListener("click", displayCity);
form.addEventListener("submit", displayCity);

//Bonus Feature
function fahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector(".temperature");
  let celtofah = Math.round((11 * 9) / 5 + 32);
  temp.innerHTML = celtofah;
}
let fah = document.querySelector("h1 #fahrenheit-link");
fah.addEventListener("click", fahrenheit);

function celcius(event) {
  event.preventDefault();
  let temp = document.querySelector(".temperature");
  let fahtocel = Math.round(((52 - 32) * 5) / 9);
  temp.innerHTML = fahtocel;
}
let cel = document.querySelector("h1 #celsius-link");
cel.addEventListener("click", celcius);
