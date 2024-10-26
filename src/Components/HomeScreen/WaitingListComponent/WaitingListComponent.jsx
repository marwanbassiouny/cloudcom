import React from 'react'
import "./WaitingListComponent.css"

const WaitingListComponent = () => {
  return (
    <div className="WaitingList-section">
        <div className="WaitingList-content">
        <h1>Curious to try<br />Join the waiting list</h1>
        <p>Learn. Segment. Connect. Engage. Analyze. Support. Your customer.</p>
        <div className="WaitingList-buttons">
            <button className="button primary-button">Get Started →</button>
            <button className="button secondary-button">Book a demo →</button>
        </div>
        </div>
  </div>
  )
}

export default WaitingListComponent