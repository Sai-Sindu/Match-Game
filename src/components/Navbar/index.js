import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  render() {
    const {score, timer} = this.props
    return (
      <>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </li>

        <li className="score-timer-card">
          <p className="score">
            score: <span className="visible-results">{score}</span>
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-icon"
          />
          <p className="visible-results">{timer} sec</p>
        </li>
      </>
    )
  }
}
export default Navbar
