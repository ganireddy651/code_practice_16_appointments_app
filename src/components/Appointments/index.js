import {Component} from 'react'
import {format} from 'date-fns'
import './index.css'

class Appointments extends Component {
  render() {
    return (
      <div className="appointments-app-container">
        <div className="appointments-card">
          <h1 className="main-heading">Add Appointment</h1>
          <form className="desk-top button-container">
            <div className="input-container">
              <p className="input-title">TITLE</p>
              <input type="text" className="input" placeholder="TITLE" />
              <p className="input-title">DATE</p>
              <input type="date" className="input" />
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
            <button type="button" className="submit-btn">
              Starred
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
