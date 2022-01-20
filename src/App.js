import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductsList />} />
          <Route exact path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
