import React from 'react'

const FightSummary = ({ selections }) => {
  return (
    <div>
      <h2>FightSummary</h2>
      {Object.entries(selections).map(([fightId, fighter]) => (
        <p key={fightId}>Fight {fightId}: {fighter}</p>
      ))}
    </div>
  )
}

export default FightSummary