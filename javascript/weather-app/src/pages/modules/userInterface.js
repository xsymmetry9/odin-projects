const UI = (() =>{
    const plotUI = () =>{
        const div = document.getElementById("content");
    
        div.innerHTML = `
            <div class="container">
                <header>
                    <div class="header-container">
                        <p class="logo">GWs App</p>
                        <div class="search-container">
                            <label for="city">
                                <input type="search" class="search-rounded" id="city" placeholder="City">
                            </label>
                            <button  id="get-city">Enter</button>
                        </div>
                    </div>
               
                </header>
                <div class="weather-info">
                    <h1 class="city-name">
                        <span id="city-name"></span>, 
                        <span id="country-name"></span> 
                    </h1>
                    <div class="display-temperature-main">
                        <div class="img-temperature-container">
                            <div class="image-placer">
                                <img 
                                id="weather-icon"
                                src=""
                                alt="moon">
                            </div>
                            <p class="show-temperature"><span id="feel-like"></span>°C</p>
                        </div>
                        <p id="category" class="category"></p>
                        <p class="text-align-center">
                            <span id="high-temp"></span>°C
                            <span id="low-temp"></span>°C
                        </p>
                    </div>
                  
                </div>
                <div class="time-info">
                    <p class="text-align-center" id="day">Saturday May 23th, 2022</p>
                </div>
            
            </div>
            `
    }
    return {plotUI}
})() 

export default UI;