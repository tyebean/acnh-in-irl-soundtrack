import { useState } from 'react'
import GetHourlyMusic from '../../components/GetHourlyMusic.jsx'
import GetRealLifeHour from '../../components/GetRealLifeHour.jsx'
import GetCoords from '../../components/GetCoords.jsx'

export default function HourlyMusic() {

  const [hourly, setHourly] = useState([])
  const [music, setMusic] = useState([])

  
  return (
    <div>
      <GetHourlyMusic hourly={setHourly} music={setMusic}/>
      <GetRealLifeHour  />
      <GetCoords  />
      <h1>Hello! The time it is _time_ _date_ and it is it is _degrees_ degrees in your_location.</h1>
      <h1>We are playing background_music_name_ to reflect hour _hour_ and the _weather_ weather conditions in animal crossing new horizons </h1>
    </div>
  )
}