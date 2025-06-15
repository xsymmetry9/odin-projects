import {format} from 'date-fns'

const weather = (() =>{
    const apiKey = "f443e80ceb9f335cb3fc0c1d9eec2c43";

    const weatherData = (data) =>{

        const getCityName = () =>{
            return data.name;
        }
        const getCountryName = () =>{
            return data.sys.country;
        }
        const getTemperature = () =>{
            return data.main;
        }
        const getDescription = () =>{
            return data.weather[0];
        }
        const getDate = () =>{
            const today = format(new Date(), "eeee LLLL dd, yyyy");
            // console.log(today);
            return today;
        }

        const city = getCityName();
        const country = getCountryName();
        const weather = getTemperature();
        const description = getDescription();
        const date = getDate();

        return {city, country, weather, description, date}
    }

    const getData = async (location) => {
        const url = "https://api.openweathermap.org/data/2.5/weather?"
        try{
            const query = `q=${location}&appid=${apiKey}&units=metric`
            const response = await fetch(url + query);
            const data = await response.json();
            return weatherData(data);

        } catch (error){
            console.log(error);
        }
    }
  
    return {getData}

})();

export default weather;