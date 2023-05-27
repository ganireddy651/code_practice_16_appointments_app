import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointment, isStaredAppointment} = props
  const {id, title, date, isStarred} = appointment
  const formatedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const starImage = isStarred ? (
    <img
      className="star-image"
      src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
      alt="star"
      data-testid="star"
    />
  ) : (
    <img
      className="star-image"
      src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
      alt="star"
      data-testid="star"
    />
  )
  const onClickToChange = () => {
    isStaredAppointment(id)
  }

  return (
    <li className="appointment-card">
      <div>
        <h1 className="heading">{title}</h1>
        <p className="date-para">{`Date: ${formatedDate}`}</p>
      </div>
      <button onClick={onClickToChange} className="button" type="button">
        {starImage}
      </button>
    </li>
  )
}

export default AppointmentItem
