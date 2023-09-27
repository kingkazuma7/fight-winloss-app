import './App.css';
import FightList from './components/FightList';

function App() {
  const fights = [
    { id: 1, fighterA: 'Fighter 1A', fighterB: 'Fighter 1B' },
    { id: 2, fighterA: 'Fighter 2A', fighterB: 'Fighter 2B' },
  ];
  
  return (
    <div className="App">
      <h1>勝敗予想</h1>
      <FightList fights={fights} />
    </div>
  );
}

export default App;
