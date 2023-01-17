import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import Brief from "./components/Brief/Brief";
import Provider from "./components/Provider/Provider";

function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<ItemListContainer/>}></Route>
                <Route exact path="/category/:Id" element={<ItemListContainer/>}></Route>
                <Route exact path="/item/:Id" element={<ItemDetailContainer/>}></Route>
                <Route exact path="/checkout" element={<Checkout/>}></Route>
                <Route exact path="/checkout/:Id" element={<Brief/>}></Route>
            </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
