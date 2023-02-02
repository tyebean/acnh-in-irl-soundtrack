import { getHourly, getMusic } from "../services/acnh"
import { useEffect } from 'react'

export default function GetHourlyMusic({setHourlyMusic, setKKMusic}) {
  useEffect(() => {
    const fetchHourly = async () => {
      const hourlyMusic = await getHourly()
      setHourlyMusic(hourlyMusic.results)
    }
    const fetchKKMusic = async () => {
      const KKmusic = await getMusic()
      setKKMusic(KKmusic.results)
    }
    fetchHourly()
    fetchKKMusic()
  },
    // empty dependency array 👇🏼 to prevent endless loops
    [setHourlyMusic, setKKMusic]
  )
  return (
    <>
    </>
  )
}