import moment from 'moment';

export default function GetVideo() {
  const irl_hour = moment().hour()
  console.log(irl_hour)
  return (
    <>
      < video controls name="media" >
        {/* // todo: irl_hour will need to be changed based off of weather */}
        <source src={`https://acnhapi.com/v1/hourly/${irl_hour}`} type="audio/mpeg" />
      </video >
    </>
  )
}