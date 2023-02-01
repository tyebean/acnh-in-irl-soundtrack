import React from 'react'

export default function GetRealLifeWeather() {

  navigator.geolocation.getCurrentPosition((position)=> {
    const p=position.coords;
    console.log(p.latitude,p.longitude);
})

  return (
    <div>GetWeather</div>
  )
}