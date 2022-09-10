//DOM elements
const currentCity = document.getElementById("currentCity"); // goes into the html
const currentWeather = document.getElementById ("currentWeather"); // goes into the html
const currentTemp = document.getElementById ("currentTemp"); // goes into the html
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const sun = document.getElementById("sun");
const weatherDescription = document.getElementById('weatherDescription')

const button = document.getElementById('button')
const searchBar = document.getElementById('searchBar');
const weeklyForecast =document.getElementById('weeklyForecast');
const five = document.getElementById('five')
const current=document.getElementById('current')

let apiKey = "366992a63dda0e641051649e46de5fed";

const weatherIcon = item.weather[0].icon 

// fetch("https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=366992a63dda0e641051649e46de5fed") select city by name
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
    iconPic.innerHTML = data.weather[0].icon 

    
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
});
/*
#F47775
#F4F7F8
#164A68
#A3DEF7
#2A5510
#F7E9B9
*/

const weatherStyle = (weatherType) => {

if (weatherType === "Clouds") {
  document.body.style.backgroundColor =
  //document.body.style.color =#F47775;
            
          
  mainWrapper.innerHTML = `
  <img class= "image" src="./Designs/Design-2/icons/noun_Cloud_1188486.svg"  alt="clouds" />
  <h1> Dim day ahead at ${json.name}</h1>
  `
} else if (weatherType === "Clear") {
  document.body.style.backgroundColor = 
  //document.body.style.color = #F4F7F8;

 
  mainWrapper.innerHTML = `
  <img class="image" src="./Designs/Design-2/icons/noun_Sunglasses_2055147.svg" alt="sunny"/>
  <h1>Beach time at ${json.name} !! </h1>
  `  

} else if (weatherType === "Rain" || "Drizzle" || "Thunderstorm") {
          //document.body.style.backgroundColor = ;
  //document.body.style.color =#A3DEF7;
          
  object.style.backgroundImage="url(https://images.pexels.com/photos/3122192/pexels-photo-3122192.jpeg?auto=compress&cs=tinysrgb&w=1600)"

  mainWrapper.innerHTML = `
  <img class="image" src="./Designs/Design-2/icons/noun_Umbrella_2030530.svg"   alt="pouring"/>
  <h1>Umbrella time at  ${json.name} </h1>
   `
  }
}
  //});
  
//);

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
      <div class="day-design">
        <div> ${new Date(date).toLocaleDateString("en-US", { weekday: "long", })} </div>
        <div> ${weatherTemperature}° </div>
        <img class="icons" src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png"</div>  
        <div> ${weatherDescription} <div>
    `;
  }); 
  console.log(filteredForecast);
  });
   
}

fiveDayForecast()

//styling for the weather






/*const weatherIcons = () =>{
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&appid=32ba0bfed592484379e51106cef3f204")
.then(response => response.json())
.then((data) => {

  for(i=0;i<5;i++)
  document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[0].weather[0].icon
        +".png";
})
}
weatherIcons();*/


//if icon === "Cloudy"{


//let pic = ("http://openweathermap.org/img/wn/10d@2x.png")
/*for(i = 0; i<5; i++){
  document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
  data.list[i].weather[0].icon
  +".png";

  console.log(data)
}*/

/* filteredForecast.forEach((day) => {
      const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] //day of week
      const date = new Date(day.dt * 1000)
      const now = new Date();  // Make a Date object for right now
      const isTodaysForecast = date.getDay() === now.getDay(); // Compare the forecast's day with the day right now
      let dayName = week[date.getDay()]
      if(!isTodaysForecast){
        fiveDayForecast.innerHTML += `<p>${dayName}: ${day.main.temp} °C</p>`  // We don't want to include this forecast if it is for today
      }
    })*/

   // const filtered = data.list.filter((item => item.dt_txt.includes('12:00'))

    /*const filteredTemp = data.list.filter(item => item.dt_txt.includes('12:00')) //filters out only the forecast at 12.00 each day
      console.log('filtered temp', filteredTemp)

      filteredTemp.map((item) => {
        weekDays = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"]
      const date = new Date(data.dt * 1000) // converts the date in data to correct format
      const dayName = weekdayName[date.getDay()]
      const weatherIcon = item.weather[0].icon 


//const weekDays = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Saturday"]
/*const x = () =>{




});*/
/*const weather = {
	apiKey: 'd7e64bc8f54b920fd57db6615f56c622',
	fetchWeather: function (city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=metric&appid="+this.apiKey)
        .then((response) => response.data())
        .then((data) => this.displayWeather(data));
    },
        displayWeather:(data) => {
          const { name } = data;
          const { icon , description } = data.weather[0].description;
          const { temp,humidity } = data.main;
          const { speed } = data.wind;
          console.log(name,icon,description,temp,humidity,speed)
}
};*/
//we need a function for the button
//evenlistener draft

/* //button.addEventListener('click' () =>{} */ 