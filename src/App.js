import "./App.css";
import { Navbar } from "./components/navbar";
import { Slider } from "./components/slider";
import { ProductList } from "./components/productList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const products = await axios.get("https://fakestoreapi.com/products");
        setProductsData(products.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <Slider />
        <ProductList productsData={productsData} loading={loading} />
      </div>
    </div>
  );
}

export default App;
