//DOM elements
const currentCity = document.getElementById("currentCity"); // goes into the html
const currentWeather = document.getElementById ("currentWeather"); // goes into the html
const currentTemp = document.getElementById ("currentTemp"); // goes into the html
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const sun = document.getElementById("sun");
const weatherDescription = document.getElementById('weatherDescription')
const mainWrapper = document.getElementById('main-wrapper')
const button = document.getElementById('button')
const searchBar = document.getElementById('searchBar');
const weeklyForecast =document.getElementById('weeklyForecast');
const five = document.getElementById('five')
const current=document.getElementById('current')

let apiKey = "366992a63dda0e641051649e46de5fed";

//geolocation
// fetch("https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=366992a63dda0e641051649e46de5fed") select city by name
/*
#F47775
#F4F7F8
#164A68
#A3DEF7
#2A5510
#F7E9B9
*/

  //object.style.backgroundImage="url(https://images.pexels.com/photos/3122192/pexels-photo-3122192.jpeg?auto=compress&cs=tinysrgb&w=1600)"


const currentForecast = () => {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&appid=366992a63dda0e641051649e46de5fed")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    currentCity.innerHTML = data.name; 
    currentTemp.innerHTML = data.main.temp.toFixed() + "°C";  //rounding" remove decimals
    currentWeather.innerHTML = data.weather[0].main;
    weatherDescription.innerHTML = data.weather[0].description;
    
    
    
   const rise = new Date(data.sys.sunrise * 1000);
   const up = rise.toLocaleTimeString([], {
     timeStyle: "short",
   });
   const set = new Date(data.sys.sunset * 1000);
   const down = set.toLocaleTimeString([], {
     timeStyle: "short",
   });
   sunrise.innerHTML += `Sunrise: ${up} `;
   sunset.innerHTML += `Sunset: ${down} `;
        console.log(`${up} ${down}`);

})

}

  if (this.weatherType === 'Clouds') {
    document.body.style.backgroundImage = url('https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&w=1600')
    //document.body.style.backgroundColor =#F47775;
                 
    mainWrapper.innerHTML = `
    <img class= "image" src="./Designs/Design-2/icons/noun_Cloud_1188486.svg"  alt="clouds" />
    <div = "main-wrapper"> Dim day ahead at ${data.name}</div>
    `
  } 
  else if (this.weatherType === 'Clear') {
    document.body.style.backgroundImage =  url('https://images.pexels.com/photos/60006/spring-tree-flowers-meadow-60006.jpeg?auto=compress&cs=tinysrgb&w=1600');
    //document.body.style.color = #F4F7F8;
  
   
    mainWrapper.innerHTML = `
    <img class="image" src="./Designs/Design-2/icons/noun_Sunglasses_2055147.svg" alt="sunny"/>
    <div= "main-wrapper"> Beach time at ${data.name} !! </div>
    `  
  
  } 
  else if (this.weatherType=== 'Rain' | 'Drizzle' | 'Thunderstorm') {
    document.body.style.backgroundImage = url('https://images.pexels.com/photos/3122192/pexels-photo-3122192.jpeg?auto=compress&cs=tinysrgb&w=1600');
    //document.body.style.color =#A3DEF7;
            
  
  
    mainWrapper.innerHTML = `
    <img class="image" src="./Designs/Design-2/icons/noun_Umbrella_2030530.svg"   alt="pouring"/>
    <div = "main-wrapper"> Umbrella time at  ${data.name} </div>
     `
    }



const fiveDayForecast = () => {

  fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&appid=366992a63dda0e641051649e46de5fed") //forecast
  .then((response) => {
    return response.json();
  })
  .then ((data) => {
    const filteredForecast = data.list.filter((item) => item.dt_txt.includes("00:00:00"));//data: the the API response. List: the conditions// return 5 days forecast
    
    filteredForecast.forEach((item) => {
      const date = new Date(item.dt * 1000); 
      const weatherTemperature = item.main.temp.toFixed(1)
      const weatherIcon = item.weather[0].icon 
      const weatherDescription = item.weather[0].description
      
    weeklyForecast.innerHTML += `
      <div class="weather-design">
        <div> ${new Date(date).toLocaleDateString("en-US", { weekday: "long", })} </div>
          <div> ${weatherTemperature}° </div>
          <img class="icons" src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png"</div>  
        <div> ${weatherDescription} <div>
    `;
  }); 
  console.log(filteredForecast);
  });
}


