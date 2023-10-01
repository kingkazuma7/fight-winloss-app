import React, { useState } from 'react'
import FighterSelection from './FighterSelection'
import FightSummary from './FightSummary'

const FightList = ({ fights }) => {
  const [selections, setSelections] = useState({});
  
  const handleSelection = (fightId, fighter) => (
    setSelections({ ...selections, [fightId]: fighter })
  )
  
  return (
      <div>
        {fights.map((fight) => (
        <FighterSelection
          key={fight.id}
          fight={fight}
          onSelection={(fighter) => handleSelection(fight.id, fighter)}
        />
      ))}
      {/* <FightSummary selections={selections} /> */}
    </div>
  )
}

export default FightList