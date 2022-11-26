import logo from './logo.svg';
import Button from 'react-bootstrap/Button'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemListContainer saludo="Hola usuario"/>
    </div>
  );
}

export default App;
