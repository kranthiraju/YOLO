import './App.css'
import Home from './Components/home'
import Cart from './Components/cart/cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/context'

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
