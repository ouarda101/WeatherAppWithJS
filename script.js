

    const OPENWEATHER_API_KEY = "YOUR_OPENWEATHER_API_KEY";
    const GEOAPIFY_API_KEY = "YOUR_GEOAPIFY_API_KEY";

   


    const suggestionsBox = document.getElementById("suggestionsBox");
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    let debounceTimer;

    
    async function checkWeather(city){
        const response = await fetch(OPENWEATHER_API_URL + city + `&appid=${OPENWEATHER_API_KEY}`);
       
        if (response.status == 404) {
            document.querySelector(".error").style.display = "block" ;
            document.querySelector(".weather").style.display = "none" ;

        }else {

        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";

        }
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";

        }
        else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";

        }
        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";

        }
        else if (data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";

        }
        else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";

        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none" ;

        }
        
    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })

    
 