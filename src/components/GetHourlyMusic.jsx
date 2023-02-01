import { getHourly, getMusic } from "../services/acnh"
import { useEffect } from 'react'

export default function GetHourlyMusic({hourly, music}) {
  useEffect(() => {
    const fetchHourly = async () => {
      const hourly = await getHourly()
      hourly(hourly.results)
    }
    const fetchMusic = async () => {
      const music = await getMusic()
      music(music.results)
    }
    fetchHourly()
    fetchMusic()
  },
    // empty dependency array 👇🏼 to prevent endless loops
    []
  )
  return (
    <>
    </>
  )
}
