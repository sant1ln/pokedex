import { Home } from './pages/Home';
import {Router} from '@reach/router'
import './App.css';
import { Pokemon } from './pages/Pokemon';
import { Header } from './components/Header';
import { Abilities } from './pages/Abilities';
import { Types } from './pages/Types';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <Pokemon  path="/pokemon/:id"/>
        <Abilities path="/ability/:name"/>
        <Types path="/type/:type" />
      </Router>
    </div>
  );
}

export default App;
