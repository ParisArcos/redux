import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={ProductsList} />
          <Route exact path="/product/:productId" element={ProductDetails} />
          <Route> 404 Not Found!</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
