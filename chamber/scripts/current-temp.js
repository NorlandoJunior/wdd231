const apiKey = '875451d8067570f7f358fba44723c498';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=-23.55&lon=-46.63&appid=${apiKey}&units=metric`;

async function getWeather() {
  try {
    const response = await fetch(url);
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
getWeather();