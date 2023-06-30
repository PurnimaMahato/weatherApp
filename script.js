
        // const apiKey="f0af7576570a062821eea279dab9d020";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=f0af7576570a062821eea279dab9d020&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
        const city = searchBox.value;

        async function checkWeather(city){
            const response = await fetch(apiUrl + city );
            
            if(response.status==404){
                alert("Invalid city name . Please enter correct city name .");
                document.querySelector(".weather").style.display="none";
            }
            else if(response.status==400){
                alert("Please enter the city name.");
                document.querySelector(".weather").style.display="none";

            }
            
            
            else{
            var data= await response.json();
            console.log(data);
            document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°c";
            document.querySelector(".city").innerHTML= data.name;
            document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        
                
                
                if(data.weather[0].main == "Clouds"){
                    weatherIcon.src = "images/clouds.png";
                }
                else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "images/clear.png";
                }
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "images/rain.png";
                }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "images/drizzle.png";
                }
                else if(data.weather[0].main == "Mist"){
                    weatherIcon.src = "images/mist.png";
                }

                document.querySelector(".weather").style.display="block";

            }
          

        }
       searchBtn.addEventListener("click" , ()=>{
       
        checkWeather(searchBox.value);
        

       }) 
      
        
  