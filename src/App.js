
import './App.css';
import Header from './Components/Header/Header';
import { Advertisement } from './Components/Section/Advertisment';
import { Landed } from './Components/Section/Landed';
import {Corner} from './Components/Section/Corner';

function App() {
  return (
    <div className="App">
    <Header />
    <Advertisement />
    <Landed />
    <Corner />
      
    </div>
  );
}

export default App;
