var setTime = $("#setTime");

//Button dynamics when selected
document.getElementById("submit").onclick = function (event) {
  event.preventDefault();
  myName = document.getElementById("search").value;
  updateCitySummary(myName);
};

document.getElementById("Chicago").onclick = function (event) {
  event.preventDefault();
  myName = document.getElementById("Chicago").textContent;
  updateCitySummary(myName);
  pullWeatherData(myName);
};

document.getElementById("Minneapolis").onclick = function (event) {
  event.preventDefault();
  myName = document.getElementById("Minneapolis").textContent;
  updateCitySummary(myName);
  pullWeatherData(myName);
};
//Updating City Summary
function updateCitySummary(cityName) {
  console.log("updateCitySummary: " + cityName);
  $("#City").text(cityName + " " + dayjs().format("(MM/DD/YYYY)"));
}

function pullWeatherData(cityName) {
  console.log("pullWeatherData: " + cityName);
  var requestURL =
    "https//:api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=428fe011dda65992154ef76a95909186";
  fetch(requestURL).then(function (response) {
    return response.json();
  });
}
//Setting Interval Timer
setInterval(() => {
  setTime.text("Current Time: " + dayjs().format("dddd, hh:mm A"));
}, 1000);
