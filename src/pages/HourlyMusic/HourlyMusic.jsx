import { useState } from 'react'
import GetHourlyMusic from '../../components/GetHourlyMusic'

export default function HourlyMusic() {
  const [hourly, setHourly] = useState([])
  const [music, setMusic] = useState([])

  return (
    <div>
      <GetHourlyMusic hourly={setHourly} music={setMusic}/>
      <h2>{hourly.songID}</h2>
      <h2>{music.songID}</h2>
    </div>
  )
}