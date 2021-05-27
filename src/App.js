import logo from './logo.svg';
import './App.css';
import Case from './components/Case'
import Weather from './components/Weather'

function App() {
  return (
    <div className="App">
      <Weather></Weather>
      <Case></Case>
    </div>
  );
}

export default App;
