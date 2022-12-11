import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}></Route>
          <Route exact path="/category/:Id" element={<ItemListContainer/>}></Route>
          <Route exact path="/item/:Id" element={<ItemDetailContainer/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
