import React from 'react'

const Weather = require('weather');

const HERE_APP_ID = `${process.env.HERE_APP_ID}`
const HERE_API_KEY = `${process.env.HERE_API_KEY}`

const weather = new Weather({
  HERE_APP_ID,
  HERE_API_KEY
});

// now(<location>) returns a Promise
weather.now('Brisbane, Australia').then((results) => {
  console.log(results);
});

export default function GetWeather() {
  return (
    <div>GetWeather</div>
  )
}