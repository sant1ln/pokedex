import { Home } from './pages/Home';
import {Router} from '@reach/router'
import './App.css';
import { Pokemon } from './pages/Pokemon';
import { Header } from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <Pokemon  path="/pokemon/:id"/>
      </Router>
    </div>
  );
}

export default App;
