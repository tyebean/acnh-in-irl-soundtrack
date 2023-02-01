import React from 'react'

export default function GetCoords() {
  navigator.geolocation.getCurrentPosition((position)=> {
    const p=position.coords;
    const lat = p.latitude
    const long = p.longitude
    console.log("lat:", lat, "long:", long);
    return {lat, long}
})

  return (
    <div></div>
  )
}