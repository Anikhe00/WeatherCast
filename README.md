# ☁️ Weather App

A clean, simple, and responsive weather application built using **HTML**, **CSS**, and **vanilla JavaScript**. The app fetches real-time weather data from the **OpenWeatherMap API** and displays key weather information for any city the user searches for.

---

## 📸 Screenshots

> ![WeatherCast Interface](/Icons/Screenshot%202025-07-24%20at%2011.16.33.png)

---

## 🌍 Live Demo

Try the app live here: [https://weather-cast-self.vercel.app/](https://weather-cast-self.vercel.app/)

---

## 🚀 Features

- ⛅ Real-time weather updates for any city
- 🌡️ Temperature in Celsius
- ☀️ Weather description (e.g. Cloudy, Sunny, Rainy)
- 💧 Humidity, wind speed, and cloud coverage
- 🗓️ Automatically displays today's date
- 🌐 Uses the OpenWeatherMap API

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (vanilla)  
- [OpenWeatherMap API](https://openweathermap.org/current)

---

## 📂 How It Works

1. User enters a city name into the input field  
2. The app sends a GET request to the OpenWeatherMap API  
3. It receives a weather data response and extracts:
   - City name and country
   - Temperature (converted from Kelvin to Celsius)
   - Weather type, humidity, wind speed, and cloudiness
   - Weather icon  
4. The weather card is dynamically populated with this data

---

## 🧰 Getting Started Locally

1. Clone the repository:
```bash
git clone https://github.com/Anikhe00/WeatherCast.git
```

2. Navigate into the project folder:
```bash
cd weather-app
```

3. Open `index.html` in your browser

> ⚠️ Note: You need a valid **OpenWeatherMap API key** to use this app. Replace the placeholder key in `index.js`:
```js
const apiKey = "your-api-key-here";
```

---

## 📁 Folder Structure

```bash
Weather-App/
├── index.html
├── styles.css
├── index.js
```

---

## 👩‍💻 Author

- **Name:** Akanji Shakirat  
- **Role:** Product Designer & Frontend Developer
- **Contact:** [LinkedIn](https://www.linkedin.com/in/your-link)
- **Live Demo:** [weather-cast-self.vercel.app](https://weather-cast-self.vercel.app/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).