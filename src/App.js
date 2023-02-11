import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
