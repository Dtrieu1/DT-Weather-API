var setTime = $("#setTime");
var temp = $("#temp");
var wind = $("#wind");
var humidity = $("#humidity");
var lon = "";
var lat = "";
//Button dynamics when selected
document.getElementById("submit").onclick = function (event) {
  event.preventDefault();
  $("#fiveDayForecast").empty();
  myName = document.getElementById("search").value;
  updateCitySummary(myName);
  pullWeatherData(myName);
};

//Updating City Summary
function updateCitySummary(cityName) {
  console.log("updateCitySummary: " + cityName);
  $("#City").text(cityName + " " + dayjs().format("(YYYY-MM-DD)"));
}

function pullWeatherData(cityName) {
  console.log("pullWeatherData: " + cityName);
  var weather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=428fe011dda65992154ef76a95909186";
  fetch(weather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      temp.text((((data.main.temp - 273.15) * 9) / 5 + 32).toFixed(2) + " F");
      wind.text(data.wind.speed + " mph");
      humidity.text(data.main.humidity + " %");
      var image =
        "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
      $("#icon").attr("src", image);
      lat = data.coord.lat;
      lon = data.coord.lon;

      console.log("lat" + lat);
      console.log("lon" + lon);

      var forecast =
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=428fe011dda65992154ef76a95909186";
      fetch(forecast)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var dayNumber = 1;
          for (var i = 6; i < data.list.length; i += 8) {
            var date = data.list[i].dt_txt.split(" ")[0];
            var main_temp =
              (((data.list[i].main.temp - 273.15) * 9) / 5 + 32).toFixed(2) +
              " F";
            var wind_speed = data.list[i].wind.speed;
            var main_humidity = data.list[i].main.humidity;
            var icon =
              "http://openweathermap.org/img/wn/" +
              data.list[i].weather[0].icon +
              ".png";
            var newCard = document.createElement("div");
            newCard.className = "cardsWeather";
            newCard.innerHTML = `
     <div>${"Temp:" + main_temp} </div>
     <div>${"Wind: " + wind_speed + " MPH"}</div>
     <img src=${icon}
     <div>${""}</div>
     <div>${"Humidity: " + main_humidity + "%"}</div>
     `;
            $("#fiveDayForecast").append(newCard);
          }

          dayNumber = 1;
        });
    });
}

//Setting Interval Timer
setInterval(() => {
  setTime.text("Current Time: " + dayjs().format("dddd, hh:mm A"));
}, 1000);
