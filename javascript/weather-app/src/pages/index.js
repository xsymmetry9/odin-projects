import "../styles/style.css"
import UI from "./modules/userInterface";
import dailyForecast from "./modules/dailyForecast"
import view from "./modules/view"

// ---------------------------- UI ----------------------------------------------------------------------

let DEFAULT_data = await dailyForecast.getData("miami");
UI.plotUI();
view.setSearchResult(DEFAULT_data);

// ---------------------------------- Functions ----------------------------------------------------
const button = document.getElementById("get-city");
button.addEventListener(("click"), async () =>{
    const citySearch = document.getElementById("city");
    console.log(citySearch.value);
    if(citySearch.value === "") return;
    let weatherData = await dailyForecast.getData(citySearch.value);
    view.setSearchResult(weatherData);
    citySearch.value = "";
});
