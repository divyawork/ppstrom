const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = "fae3e55ea462b2f3b33522e113c6de14";

  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    const weatherData = {
      city: response.data.name,
      temperature: convertKelvinToCelsius(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      windSpeed: response.data.wind.speed,
    };

    res.json(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

function convertKelvinToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(2);
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
