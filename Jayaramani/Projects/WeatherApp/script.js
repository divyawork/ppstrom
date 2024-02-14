const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const forecastContainer = document.getElementById('forecastContainer');
const cloudImage = document.getElementById('cloudImage');
const windSpeed = document.getElementById('windSpeed');
const humidity = document.getElementById('humidity');
const dateTime = document.getElementById('dateTime');

const apiKey = '0ec02f158e6b62428a85da239efed4a3'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiforecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

searchBtn.addEventListener('click', () => {
  const cityName = cityInput.value.trim();
  if (cityName !== '') {
    getWeatherData(cityName);
    getForecastData(cityName);
  }
});

cityInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const cityName = cityInput.value.trim();
    if (cityName !== '') {
      getWeatherData(cityName);
      getForecastData(cityName);
    }
  }
});


async function getWeatherData(city) {
  const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
  

  try {
    const response = await fetch(url);
    const data = await response.json();

    updateWeatherUI(data);
    
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
function updateWeatherUI(data) {
    if (data.cod === '404') {
      alert('City not found. Please enter a valid city name.');
    } else {
      const cityNameElement = document.getElementById('cityName');
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      const windSpeedValue = data.wind.speed;
      const humidityValue = data.main.humidity;

      // Display current date and time
      const currentDate = new Date();
      dateTime.innerText = `${currentDate.toLocaleString()}`;
  
      // Display city name
      cityNameElement.innerText = `${data.name}, ${data.sys.country}`;
  
      // Display temperature and weather description
      weatherDetails.innerHTML = `<strong class="temperature">${Math.round(temperature)}°C</strong><br><span class="weather-description">${weatherDescription}</span>`;


      // Set cloud image based on weather description
      cloudImage.src = getCloudImage(weatherDescription);
  
      // Update other weather details
      windSpeed.innerHTML = `Wind Speed: <strong>${windSpeedValue} m/s</strong>`;
      humidity.innerHTML = `Humidity: <strong>${humidityValue}%</strong>`;
      
    }
  }

  
async function getForecastData(city) {
  const forecastUrl = `${apiforecastUrl}?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    console.log('Forecast Data:', forecastData); // Add this line for debugging

    if (forecastData.hasOwnProperty('list')) {
      updateForecastUI(forecastData.list);
    } else {
      console.error('Error: list property not found in forecastData object');
    }
  } catch (error) {
    console.error('Error fetching forecast data:', error);
  }
}

function updateForecastUI(dailyForecasts) {
  forecastContainer.innerHTML = '';

  const uniqueDays = new Set();

  dailyForecasts.forEach((day) => {
    const forecastDate = new Date(day.dt * 1000);
    const dayName = getDayName(forecastDate.getDay());

    // Check if the day is already added
    if (!uniqueDays.has(dayName)) {
      uniqueDays.add(dayName);

      const temperatureMax = day.main.temp_max;
      const temperatureMin = day.main.temp_min;
      const weatherDescription = day.weather[0].description;

      // Create forecast card
      const forecastCard = document.createElement('div');
      forecastCard.classList.add('forecast-card');
      forecastCard.innerHTML = `
        <p class="day">${dayName}</p>
        <img src="${getCloudImage(weatherDescription)}" alt="${weatherDescription}" class="forecast-icon">
        <p class="temp">${Math.round(temperatureMax)}°C / ${Math.round(temperatureMin)}°C</p>
      `;

      forecastContainer.appendChild(forecastCard);
    }
  });
}




function getDayName(dayIndex) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[dayIndex];
}

function getCloudImage(description) {
  // Add conditions based on weather descriptions
  if (description.includes('clouds')) {
    return 'image/cloud1.png'; // Use cloud image for cloudy weather
  } else if (description.includes('clear')) {
    return 'image/sun1.png'; // Use sun image for clear weather
  } else if (description.includes('rain')) {
    return 'image/rain-icon.png';
  } else if (description.includes('fog')) {
    return 'image/fog.png';
  } else if (description.includes('haze')) {
    return 'image/haze.png';// Use rain image for rainy weather
  } else {
    return 'image/placeholder.png'; // Default image if no match
  }
}


