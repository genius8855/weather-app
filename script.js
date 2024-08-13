const apiKey = "f08fd1267e5713fce4a1a6af7a5a8863";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
 
    try{
    const response = axios(apiUrl + city + `&appid=${apiKey}`);
    if(!response.ok)  throw new Error("Network Error");


    }
    catch(err)  {
        console.log("invalid", err);
        document.getElementById("cityName").textContent = "invalid";
    };

   

    if(response.status == 404){
        document.querySelector(".temp").style.display = "none";
        document.querySelector(".city").style.display = "none";
    }

    else{

        var data;
        try{
        data = await response.json();
        }catch(err){
        console.log(err);
       }
        console.log(data);

        document.querySelector(".temp").style.display = "block";
        document.querySelector(".city").style.display = "block";

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            document.querySelector(".second-row img").src="clouds.png";
        }

        else if(data.weather[0].main == "Clear"){
            document.querySelector(".second-row img").src="clear.png";
        }

        else if(data.weather[0].main == "Drizzle"){
            document.querySelector(".second-row img").src="drizzle.png";
        }

        else if(data.weather[0].main == "Mist"){
            document.querySelector(".second-row img").src="mist.png";
        }

        else if(data.weather[0].main == "Rain"){
            document.querySelector(".second-row img").src="rain.png";
        }

        else if(data.weather[0].main == "Snow"){
            document.querySelector(".second-row img").src="snow.png";
        }
    }
    
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value); 
});



// https://api.openweathermap.org/data/2.5/weather?q=Jaunpur&appid=f08fd1267e5713fce4a1a6af7a5a8863