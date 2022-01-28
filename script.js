let temp = document.querySelector(".temperature");
let feelsLike = document.querySelector(".feels_like");
let clouds = document.querySelector(".clouds");
let visibility = document.querySelector(".visibility");
let humidity = document.querySelector(".humidity");
let pressure = document.querySelector(".pressure");
let wind = document.querySelector(".wind");
//----------------------------------------------------------------------------------------------------------
function selectCity() {
  let city = document.querySelector(".select-city").value;
  switch (city) {
    case "moscow":
      break;
    case "chisinau":
      break;
    case "kiev":
      break;
    case "bucharest":
      break;
  }
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=163b112f5e1715475aa49fab6aaf7b4c`
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      document.querySelector(".city-name").innerHTML = data.name;
      temp.innerHTML = Math.round(data.main.temp - 273) + "&deg;";
      feelsLike.innerHTML =
        "Ощущается как " + Math.round(data.main.feels_like - 273) + "&deg;";
      clouds.textContent = data.weather[0]["description"];
      document.querySelector(
        ".icon"
      ).innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
      visibility.innerHTML = "Видимость " + data.visibility + " Метров";
      humidity.innerHTML = "Влажность " + data.main["humidity"] + " %";
      pressure.innerHTML =
        "Давление " + Math.round(data.main.pressure - 256) + " мм.рт.ст";
      wind.innerHTML = "Скорость ветра " + data.wind["speed"] + " М.с";

      console.log(data);
    });
}
selectCity();
document.querySelector(".select-city").addEventListener("change", selectCity);

//Время виджета--------------------------------------------
function startTime() {
  let tm = new Date();
  let h = tm.getHours();
  let m = tm.getMinutes();
  m = checkTime(m);
  document.querySelector(".time").innerHTML = h + " : " + m;
  t = setTimeout("startTime()", 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
startTime();
//Время виджета--------------------------------------------
