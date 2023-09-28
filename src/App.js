import './App.css';
import FightList from './components/FightList';

function App() {
  const fights = [
    { id: 1, fighterA: '孫悟空', fighterB: 'ピッコロ' },
    { id: 2, fighterA: 'ベジータ', fighterB: 'フリーザ' },
    { id: 3, fighterA: 'トランクス', fighterB: 'セル' },
    { id: 4, fighterA: '孫悟飯', fighterB: 'ブウ' },
    { id: 5, fighterA: 'クリリン', fighterB: 'タオパイパイ' },
    { id: 6, fighterA: 'ヤムチャ', fighterB: '天津飯' },
    { id: 7, fighterA: 'ランチ', fighterB: 'ウーロン' },
    { id: 8, fighterA: 'ビーデル', fighterB: 'ミスターサタン' },
    { id: 9, fighterA: '人造人間18号', fighterB: '人造人間17号' },
    { id: 10, fighterA: 'ヤジロベー', fighterB: 'カリン様' },
  ];
  
  return (
    <div className="App">
      <h1>勝敗予想</h1>
      <FightList fights={fights} />
    </div>
  );
}

export default App;
