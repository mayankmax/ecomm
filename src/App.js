
import './App.css';
import Header from './Components/Header/Header';
import { Advertisement } from './Components/Section/Advertisment';
import { Landed } from './Components/Section/Landed';
import {Corner} from './Components/Section/Corner';
import { ProductCard } from './Components/ProductCard';
import Latest from './Components/Section/Latest/Latest';
import {Login} from './Components/Login';

function App() {
  return (
    <div className="App">
    <Header />
    <Advertisement />
    <Landed />
    <Corner />
    <Corner />
    <Latest />
    <Login />
      
    </div>
  );
}

export default App;
