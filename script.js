var setTime = $("#setTime");
var temp = $("#temp");
var wind = $("#wind");
var humidity = $("#humidity");
var lon = "";
var lat = "";
//Button dynamics when selected
document.getElementById("submit").onclick = function (event) {
  event.preventDefault();
  myName = document.getElementById("search").value;
  updateCitySummary(myName);
  pullWeatherData(myName);
  pullForecastData(myName);
};

//Updating City Summary
function updateCitySummary(cityName) {
  console.log("updateCitySummary: " + cityName);
  $("#City").text(cityName + " " + dayjs().format("(YYYY-MM-DD)"));
}

const dummyData = {
  coord: {
    lon: -87.65,
    lat: 41.85,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03n",
    },
  ],
  base: "stations",
  main: {
    temp: 300.81,
    feels_like: 304.28,
    temp_min: 297.66,
    temp_max: 302.69,
    pressure: 1010,
    humidity: 79,
  },
  visibility: 10000,
  wind: {
    speed: 3.09,
    deg: 360,
  },
  clouds: {
    all: 40,
  },
  dt: 1690424465,
  sys: {
    type: 2,
    id: 2005153,
    country: "US",
    sunrise: 1690367893,
    sunset: 1690420544,
  },
  timezone: -18000,
  id: 4887398,
  name: "Chicago",
  cod: 200,
};

function pullWeatherData(cityName) {
  console.log("pullWeatherData: " + cityName);
  console.log(dummyData);
  // var weather =
  //   "https://api.openweathermap.org/data/2.5/weather?q=" +
  //   cityName +
  //   "&appid=428fe011dda65992154ef76a95909186";
  // fetch(weather)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //     temp.text((((data.main.temp - 273.15) * 9) / 5 + 32).toFixed(2) + " F");
  //     wind.text(data.wind.speed + " mph");
  //     humidity.text(data.main.humidity + " %");
  //     lon = data.coord.lon
  //     lat = data.coord.lat
  //   });
  temp.text((((dummyData.main.temp - 273.15) * 9) / 5 + 32).toFixed(2) + " F");
  wind.text(dummyData.wind.speed + "mph");
  humidity.text(dummyData.main.humidity + " %");
  console.log("lon: " + dummyData.coord.lon);
  console.log("lat: " + dummyData.coord.lat);
}

const dummyData2 = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1690426800,
      main: {
        temp: 300.56,
        feels_like: 303.59,
        temp_min: 299.98,
        temp_max: 300.56,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 988,
        humidity: 78,
        temp_kf: 0.58,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 2.47,
        deg: 1,
        gust: 3.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-27 03:00:00",
    },
    {
      dt: 1690437600,
      main: {
        temp: 299.37,
        feels_like: 299.37,
        temp_min: 296.99,
        temp_max: 299.37,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 990,
        humidity: 78,
        temp_kf: 2.38,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 27,
      },
      wind: {
        speed: 2.97,
        deg: 42,
        gust: 6.32,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-27 06:00:00",
    },
    {
      dt: 1690448400,
      main: {
        temp: 297.23,
        feels_like: 297.81,
        temp_min: 295.57,
        temp_max: 297.23,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 991,
        humidity: 81,
        temp_kf: 1.66,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 3.08,
        deg: 12,
        gust: 5.58,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-27 09:00:00",
    },
    {
      dt: 1690459200,
      main: {
        temp: 295.62,
        feels_like: 296.12,
        temp_min: 295.62,
        temp_max: 295.62,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 992,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3,
        deg: 40,
        gust: 4.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-27 12:00:00",
    },
    {
      dt: 1690470000,
      main: {
        temp: 299.87,
        feels_like: 301.01,
        temp_min: 299.87,
        temp_max: 299.87,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 994,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 39,
      },
      wind: {
        speed: 2.93,
        deg: 41,
        gust: 3.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-27 15:00:00",
    },
    {
      dt: 1690480800,
      main: {
        temp: 302.21,
        feels_like: 303.14,
        temp_min: 302.21,
        temp_max: 302.21,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 994,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 21,
      },
      wind: {
        speed: 3.48,
        deg: 59,
        gust: 3.17,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-27 18:00:00",
    },
    {
      dt: 1690491600,
      main: {
        temp: 303.25,
        feels_like: 303.6,
        temp_min: 303.25,
        temp_max: 303.25,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 993,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 18,
      },
      wind: {
        speed: 2.54,
        deg: 105,
        gust: 2.52,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-27 21:00:00",
    },
    {
      dt: 1690502400,
      main: {
        temp: 302.02,
        feels_like: 302.2,
        temp_min: 302.02,
        temp_max: 302.02,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 992,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 18,
      },
      wind: {
        speed: 2.29,
        deg: 96,
        gust: 2.99,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-28 00:00:00",
    },
    {
      dt: 1690513200,
      main: {
        temp: 298.99,
        feels_like: 299.09,
        temp_min: 298.99,
        temp_max: 298.99,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 993,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 25,
      },
      wind: {
        speed: 2.08,
        deg: 144,
        gust: 2.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-28 03:00:00",
    },
    {
      dt: 1690524000,
      main: {
        temp: 298.68,
        feels_like: 298.91,
        temp_min: 298.68,
        temp_max: 298.68,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 993,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 63,
      },
      wind: {
        speed: 1.57,
        deg: 157,
        gust: 1.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-28 06:00:00",
    },
    {
      dt: 1690534800,
      main: {
        temp: 297.84,
        feels_like: 298.09,
        temp_min: 297.84,
        temp_max: 297.84,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 992,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 1.93,
        deg: 178,
        gust: 2.43,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-28 09:00:00",
    },
    {
      dt: 1690545600,
      main: {
        temp: 298.29,
        feels_like: 298.66,
        temp_min: 298.29,
        temp_max: 298.29,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 993,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 2.07,
        deg: 174,
        gust: 3.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-28 12:00:00",
    },
    {
      dt: 1690556400,
      main: {
        temp: 303.72,
        feels_like: 305.44,
        temp_min: 303.72,
        temp_max: 303.72,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 993,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 2.25,
        deg: 241,
        gust: 3.83,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-28 15:00:00",
    },
    {
      dt: 1690567200,
      main: {
        temp: 306.99,
        feels_like: 309.09,
        temp_min: 306.99,
        temp_max: 306.99,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 992,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.1,
        deg: 196,
        gust: 4.67,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-28 18:00:00",
    },
    {
      dt: 1690578000,
      main: {
        temp: 308.69,
        feels_like: 311.07,
        temp_min: 308.69,
        temp_max: 308.69,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 990,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.09,
        deg: 214,
        gust: 7.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-28 21:00:00",
    },
    {
      dt: 1690588800,
      main: {
        temp: 308.04,
        feels_like: 310.16,
        temp_min: 308.04,
        temp_max: 308.04,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 988,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 78,
      },
      wind: {
        speed: 3.98,
        deg: 183,
        gust: 6.89,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-29 00:00:00",
    },
    {
      dt: 1690599600,
      main: {
        temp: 296.24,
        feels_like: 296.93,
        temp_min: 296.24,
        temp_max: 296.24,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 991,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 69,
      },
      wind: {
        speed: 9.46,
        deg: 358,
        gust: 14.8,
      },
      visibility: 10000,
      pop: 0.72,
      rain: {
        "3h": 2.72,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-29 03:00:00",
    },
    {
      dt: 1690610400,
      main: {
        temp: 295.17,
        feels_like: 295.91,
        temp_min: 295.17,
        temp_max: 295.17,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 992,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 3.81,
        deg: 52,
        gust: 6.31,
      },
      visibility: 10000,
      pop: 0.99,
      rain: {
        "3h": 5.34,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-29 06:00:00",
    },
    {
      dt: 1690621200,
      main: {
        temp: 296.01,
        feels_like: 296.81,
        temp_min: 296.01,
        temp_max: 296.01,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 990,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.99,
        deg: 170,
        gust: 1.94,
      },
      visibility: 10000,
      pop: 0.45,
      rain: {
        "3h": 0.11,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-29 09:00:00",
    },
    {
      dt: 1690632000,
      main: {
        temp: 294.92,
        feels_like: 295.48,
        temp_min: 294.92,
        temp_max: 294.92,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 992,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 5.44,
        deg: 12,
        gust: 8.19,
      },
      visibility: 10000,
      pop: 0.33,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-29 12:00:00",
    },
    {
      dt: 1690642800,
      main: {
        temp: 296.53,
        feels_like: 296.88,
        temp_min: 296.53,
        temp_max: 296.53,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 994,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 24,
      },
      wind: {
        speed: 6.33,
        deg: 14,
        gust: 8.69,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-29 15:00:00",
    },
    {
      dt: 1690653600,
      main: {
        temp: 297.84,
        feels_like: 298.06,
        temp_min: 297.84,
        temp_max: 297.84,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 996,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 32,
      },
      wind: {
        speed: 5.75,
        deg: 15,
        gust: 7.18,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-29 18:00:00",
    },
    {
      dt: 1690664400,
      main: {
        temp: 298.2,
        feels_like: 298.22,
        temp_min: 298.2,
        temp_max: 298.2,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 996,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.17,
        deg: 13,
        gust: 6.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-29 21:00:00",
    },
    {
      dt: 1690675200,
      main: {
        temp: 296.13,
        feels_like: 296.21,
        temp_min: 296.13,
        temp_max: 296.13,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 996,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 5.29,
        deg: 15,
        gust: 8.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-30 00:00:00",
    },
    {
      dt: 1690686000,
      main: {
        temp: 294.59,
        feels_like: 294.67,
        temp_min: 294.59,
        temp_max: 294.59,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 996,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 3.18,
        deg: 38,
        gust: 7.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-30 03:00:00",
    },
    {
      dt: 1690696800,
      main: {
        temp: 294.07,
        feels_like: 294.12,
        temp_min: 294.07,
        temp_max: 294.07,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 997,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 2.9,
        deg: 30,
        gust: 7.12,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-30 06:00:00",
    },
    {
      dt: 1690707600,
      main: {
        temp: 293.6,
        feels_like: 293.69,
        temp_min: 293.6,
        temp_max: 293.6,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 997,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.24,
        deg: 28,
        gust: 3.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-30 09:00:00",
    },
    {
      dt: 1690718400,
      main: {
        temp: 294.49,
        feels_like: 294.48,
        temp_min: 294.49,
        temp_max: 294.49,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 998,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 2.61,
        deg: 43,
        gust: 4.7,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-30 12:00:00",
    },
    {
      dt: 1690729200,
      main: {
        temp: 297.61,
        feels_like: 297.42,
        temp_min: 297.61,
        temp_max: 297.61,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 998,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 3.4,
        deg: 62,
        gust: 2.99,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-30 15:00:00",
    },
    {
      dt: 1690740000,
      main: {
        temp: 299.56,
        feels_like: 299.56,
        temp_min: 299.56,
        temp_max: 299.56,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 998,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 3.22,
        deg: 60,
        gust: 2.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-30 18:00:00",
    },
    {
      dt: 1690750800,
      main: {
        temp: 299.74,
        feels_like: 299.74,
        temp_min: 299.74,
        temp_max: 299.74,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 996,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 4.07,
        deg: 78,
        gust: 3.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-30 21:00:00",
    },
    {
      dt: 1690761600,
      main: {
        temp: 297.75,
        feels_like: 297.6,
        temp_min: 297.75,
        temp_max: 297.75,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 996,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 3.36,
        deg: 105,
        gust: 3.7,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-31 00:00:00",
    },
    {
      dt: 1690772400,
      main: {
        temp: 295.85,
        feels_like: 295.79,
        temp_min: 295.85,
        temp_max: 295.85,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 995,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 3.12,
        deg: 83,
        gust: 5.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-31 03:00:00",
    },
    {
      dt: 1690783200,
      main: {
        temp: 295.18,
        feels_like: 295.21,
        temp_min: 295.18,
        temp_max: 295.18,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 996,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 3.18,
        deg: 89,
        gust: 6.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-31 06:00:00",
    },
    {
      dt: 1690794000,
      main: {
        temp: 294.1,
        feels_like: 293.97,
        temp_min: 294.1,
        temp_max: 294.1,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 996,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 19,
      },
      wind: {
        speed: 2.74,
        deg: 102,
        gust: 4.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-31 09:00:00",
    },
    {
      dt: 1690804800,
      main: {
        temp: 294.78,
        feels_like: 294.49,
        temp_min: 294.78,
        temp_max: 294.78,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 997,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 1.94,
        deg: 85,
        gust: 3.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-31 12:00:00",
    },
    {
      dt: 1690815600,
      main: {
        temp: 298,
        feels_like: 297.77,
        temp_min: 298,
        temp_max: 298,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 998,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 60,
      },
      wind: {
        speed: 3.29,
        deg: 64,
        gust: 2.92,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-31 15:00:00",
    },
    {
      dt: 1690826400,
      main: {
        temp: 298.64,
        feels_like: 298.5,
        temp_min: 298.64,
        temp_max: 298.64,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 997,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 5.12,
        deg: 46,
        gust: 4.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-31 18:00:00",
    },
    {
      dt: 1690837200,
      main: {
        temp: 297.96,
        feels_like: 297.78,
        temp_min: 297.96,
        temp_max: 297.96,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 997,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 66,
      },
      wind: {
        speed: 5.35,
        deg: 23,
        gust: 5.7,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-31 21:00:00",
    },
    {
      dt: 1690848000,
      main: {
        temp: 295.97,
        feels_like: 295.82,
        temp_min: 295.97,
        temp_max: 295.97,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 997,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 34,
      },
      wind: {
        speed: 5.56,
        deg: 15,
        gust: 7.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-01 00:00:00",
    },
  ],
  city: {
    id: 4887398,
    name: "Chicago",
    coord: {
      lat: 41.85,
      lon: -87.65,
    },
    country: "US",
    population: 2695598,
    timezone: -18000,
    sunrise: 1690367893,
    sunset: 1690420544,
  },
};

function pullForecastData(cityName) {
  console.log(dummyData2);
  var dayNumber = 1;
  for (var i = 6; i < dummyData2.list.length; i += 8) {
    var date = dummyData2.list[i].dt_txt.split(" ")[0];
    var main_temp =
      (((dummyData2.list[i].main.temp - 273.15) * 9) / 5 + 32).toFixed(2) +
      " F";
    var wind_speed = dummyData2.list[i].wind.speed;
    var main_humidity = dummyData2.list[i].main.humidity;
    var icon =
      "http://openweathermap.org/img/wn/" +
      dummyData2.list[i].weather[0].icon +
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
  //   var forecast =
  //     "https://api.openweathermap.org/data/2.5/forecast?q=" +
  //     cityName +
  //     "&appid=428fe011dda65992154ef76a95909186";
  //   fetch(forecast)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {});
  dayNumber = 1;
}

//Setting Interval Timer
setInterval(() => {
  setTime.text("Current Time: " + dayjs().format("dddd, hh:mm A"));
}, 1000);
