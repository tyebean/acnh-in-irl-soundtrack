import { useState } from 'react'
import GetHourlyMusic from '../../components/GetHourlyMusic.jsx' //props
// import GetCoords from '../../components/GetCoords.jsx'
import GetVideo from '../../components/GetVideo.jsx'

export default function HourlyMusic() {

  const [hourlyMusic, setHourlyMusic] = useState([])
  const [KKmusic, setKKMusic] = useState([])
  console.log("hourlyMusic:", hourlyMusic, "KKmusic:", KKmusic);

  return (
    <div>
      <GetHourlyMusic setHourlyMusic={setHourlyMusic} setKKmusic={setKKMusic}/>
      {/* <GetCoords /> */}
      <GetVideo />
      <div className='transparent-bg'>
      <h1>{`Hello! It is  ${Date()} and it is it is _degrees_ degrees in your_location with _weather_sunny_rainy_snowy) weather.`}</h1>
      <h1>We are playing background_music_name_ to reflect the real life time and weather as it would be in Animal Crossing New Horizons</h1>
      </div>
    </div>
  )
}