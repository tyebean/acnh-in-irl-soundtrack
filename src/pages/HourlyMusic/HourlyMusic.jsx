import { useState } from 'react'
import GetHourlyMusic from '../../components/GetHourlyMusic.jsx'
import GetCoords from '../../components/GetCoords.jsx'
import GetVideo from '../../components/GetVideo.jsx'

export default function HourlyMusic() {

  const [hourly, setHourly] = useState([])
  const [music, setMusic] = useState([])
  console.log("hourly:", hourly, "music:", music);

  return (
    <div>
      <GetHourlyMusic hourly={setHourly} music={setMusic}/>
      <GetCoords />
      <GetVideo />
      <div className='transparent-bg'>
      <h1>{`Hello! It is  ${Date()} and it is it is _degrees_ degrees in your_location with _weather_sunny_rainy_snowy) weather.`}</h1>
      <h1>We are playing background_music_name_ to reflect the real life time and weather as it would be in Animal Crossing New Horizons</h1>
      </div>
    </div>
  )
}