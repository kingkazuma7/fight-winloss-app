import React, { useState } from 'react'

const FighterSelection = ({ fight, onSelection }) => {
  const [selectedFighter, setSelectedFighter] = useState(null);
  
  const selectFighter = (fighter) => {
    setSelectedFighter(fighter); // 選択された選手を selectedFighter ステートに設定する
    onSelection(fighter); // 選択された選手を親コンポーネントに通知す
    // console.log("selectFighter click");
  }
  
  return (
    <div>
      <button onClick={() => selectFighter(fight.fighterA)}>{fight.fighterA}</button>
      <button onClick={() => selectFighter(fight.fighterB)}>{fight.fighterB}</button>
      <p>選択： {selectedFighter}</p>
    </div>
  )
}

export default FighterSelection