const view = (() =>{
    const setSearchResult = (weatherData) =>{
        if(!weatherData) return;

        console.log(weatherData);
        const getCity = document.getElementById("city-name");
        const getCountry = document.getElementById("country-name");
        const getFeelLike = document.getElementById("feel-like");
        const getHighTemperature = document.getElementById("high-temp");
        const getLowTemperature = document.getElementById("low-temp");
        const getCategory = document.getElementById("category");
        const getDay = document.getElementById("day");
        const getWeatherIcon = document.getElementById("weather-icon")


        getCity.textContent = `${weatherData.city}`;
        getCountry.textContent = `${weatherData.country}`;
        getFeelLike.textContent = `${Math.round(weatherData.weather.temp_max)}`;
        getHighTemperature.textContent = `${Math.round(weatherData.weather.temp_max)}`;
        getLowTemperature.textContent = `${Math.round(weatherData.weather.temp_min)}`;
        getCategory.textContent = `${weatherData.description.description}`
        getDay.textContent = `${weatherData.date}`
        getWeatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.description.icon}@2x.png`
        getWeatherIcon.setAttribute("alt", `${weatherData.description.description}`)
    }
    return {setSearchResult}
})();

export default view;