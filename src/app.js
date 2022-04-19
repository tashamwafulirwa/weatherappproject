import "./styles.css";

let now = new Date();
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let dateElement = document.querySelector("#date");
dateElement.innerHTML = `${day} ${hours}:${minutes}`;

let h2 = document.querySelector("h2");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiKey = "532204b610112a0c24a32e14ce6c2371";
  let apiUrL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrL).then(displayWeatherCondition);
}

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

h2.innerHTML = `${day} ${hours}:${minutes}`;

