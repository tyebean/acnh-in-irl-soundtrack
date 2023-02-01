import moment from 'moment';

export default function GetVideo() {
  const irl_hour = moment().hour()
  console.log(irl_hour)
  return (
    <>
      < audio controls loop={true} name="media" >
        <source src={`https://acnhapi.com/v1/hourly/${irl_hour}`} type="audio/mpeg" />
      </audio >
    </>
  )
}