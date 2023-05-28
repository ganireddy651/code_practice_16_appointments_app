import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointment: [], title: '', date: '', staredBtn: false}

  onInputChange = event => this.setState({title: event.target.value})

  onDateChange = event => this.setState({date: event.target.value})

  onClickAddNewAppointment = event => {
    event.preventDefault()

    const {title, date} = this.state

    const createAnAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointment: [...prevState.appointment, createAnAppointment],
      title: '',
      date: '',
    }))
  }

  isStaredAppointment = id => {
    this.setState(prevState => ({
      appointment: prevState.appointment.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onStarButtonClicked = () => {
    const {appointment, staredBtn} = this.state
    this.setState(prevState => ({
      staredBtn: !prevState.staredBtn,
    }))
    const filterData = appointment.filter(each => each.isStarred === true)
    if (staredBtn === true) {
      this.setState(prevState => ({
        appointment: prevState.appointment,
      }))
    } else {
      this.setState({appointment: filterData})
    }
  }

  render() {
    const {appointment, title, date, staredBtn} = this.state
    const buttonStyle = staredBtn ? 'activestart' : 'submit-btn'

    return (
      <div className="appointments-app-container">
        <div className="appointments-card">
          <h1 className="main-heading">Add Appointment</h1>
          <form
            className="desk-top button-container"
            onSubmit={this.onClickAddNewAppointment}
          >
            <div className="input-container">
              <label htmlFor="title" className="input-title">
                TITLE
              </label>
              <br />
              <input
                value={title}
                type="text"
                className="input"
                placeholder="TITLE"
<<<<<<< HEAD
                id="title"
=======
>>>>>>> 43f68a38481293c70abbc46c152c88d89b757407
                onChange={this.onInputChange}
              />
              <br />
              <label htmlFor="date" className="input-title">
                DATE
              </label>
              <br />
              <input
                value={date}
                type="date"
                className="input"
<<<<<<< HEAD
                id="date"
=======
>>>>>>> 43f68a38481293c70abbc46c152c88d89b757407
                onChange={this.onDateChange}
              />
              <div>
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </div>
            <div className="image-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </form>
          <div className="appointments-container">
            <h1 className="bottom-heading">Appointments</h1>
            <button
              type="button"
              className={buttonStyle}
              onClick={this.onStarButtonClicked}
            >
              Starred
            </button>
          </div>
          <div className="appointments">
            <ul>
              {appointment.map(each => (
                <AppointmentItem
                  appointment={each}
                  key={each.id}
                  isStaredAppointment={this.isStaredAppointment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
