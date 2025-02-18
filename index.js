const form = document.getElementById("location-form")
const input = document.getElementById("location-input")
const weatherCard = document.getElementById("weather-card")
const locationEl = document.getElementById("location")
const temperature = document.getElementById("temperature")
const weatherType = document.getElementById("temp-text")
const humidity = document.getElementById("humidity")
const precipitation = document.getElementById("precipitation")
const wind = document.getElementById("wind")
const icon = document.getElementById("weather-icon")
const date = document.getElementById("date")

form.addEventListener("submit", function(event){
  event.preventDefault()

  const city = input.value.trim()
  const apiKey = "f745bbdc0d98c29ca408d7b40471e5d6"
  const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  let weatherRequest = new XMLHttpRequest()
  weatherRequest.open("GET", endPoint, true)
  weatherRequest.onreadystatechange = function(){
    if(weatherRequest.readyState === 4 && weatherRequest.status === 200){
      const weatherData = JSON.parse(weatherRequest.responseText)
      const iconCode = weatherData.weather[0].icon
      const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`


      console.log(weatherData)

      locationEl.textContent = `${weatherData.name}, ${weatherData.sys.country}`
      const tempInCelsius = Math.round(weatherData.main.temp - 273.15)
      temperature.textContent = tempInCelsius
      weatherType.textContent = weatherData.weather[0].main
      humidity.textContent = `${weatherData.main.humidity}%`
      wind.textContent = `${weatherData.wind.speed} km/h`
      precipitation.textContent = `${weatherData.clouds.all}%`
      icon.textContent = weatherData.weather[0].icon
    }
  }

  weatherRequest.send()
})

function formatDate() {
  const today = new Date();
  
  const options = { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  };

  const formattedDate = today.toLocaleDateString("en-UK", options);

  date.textContent = formattedDate; 
}

formatDate(); 