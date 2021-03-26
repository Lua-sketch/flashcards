import React from 'react'
import './Card.css'

const Card = (props) => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="prompt">{props.p}</div>
      </div>
      <div className="back">
        <div className="answer">{props.a}</div>
      </div>
    </div>
  </div>
)

export default Card
