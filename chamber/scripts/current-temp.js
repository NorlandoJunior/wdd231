const apiKey = '875451d8067570f7f358fba44723c498';
const urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=-23.55&lon=-46.63&appid=${apiKey}&units=metric`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=-23.55&lon=-46.63&appid=${apiKey}&units=metric`;

// Função para obter o clima atual
async function getWeather() {
  try {
    const response = await fetch(urlCurrentWeather);
    if (!response.ok) throw new Error('Erro ao buscar dados');
    
    const data = await response.json();
    console.log(data);

    
    document.getElementById('current-temp').textContent = data.main.temp.toFixed(0);

    
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById('weather-icon').src = iconUrl;
    document.getElementById('weather-icon').alt = data.weather[0].description;

    
    document.getElementById('weather-desc').textContent = data.weather[0].description;
  } catch (error) {
    console.error('Erro ao obter dados do clima:', error);
  }
}


async function getWeatherForecast() {
  try {
    const response = await fetch(urlForecast);
    if (!response.ok) throw new Error("Erro ao buscar dados da previsão");

    const data = await response.json();
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = ""; 

    
    for (let i = 0; i < 3; i++) {
      const forecastData = data.list[i * 8]; 
      const day = new Date(forecastData.dt_txt).toLocaleDateString("en-US", { weekday: "long" });
      const temp = forecastData.main.temp.toFixed(0);
      const iconCode = forecastData.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      const description = forecastData.weather[0].description;

      
      const forecastElement = document.createElement("div");
      forecastElement.classList.add("forecast-day");
      forecastElement.innerHTML = `
        <p>${day}</p>
        <p>${temp}°C</p>
        <img src="${iconUrl}" alt="${description}">
        <p>${description}</p>
      `;
      forecastContainer.appendChild(forecastElement);
    }
  } catch (error) {
    console.error('Erro ao obter dados da previsão:', error);
  }
}


getWeather();
getWeatherForecast();
