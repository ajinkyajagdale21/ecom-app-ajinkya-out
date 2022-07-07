import "./App.css";
import { Navbar } from "./components/navbar";
import { Slider } from "./components/slider";
import { ProductList } from "./components/productList";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "./components/pagination";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [storeProductsData, setStoreProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const [visibleItems, setVisibleItems] = useState(15);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  async function fetchData() {
    try {
      const products = await axios.get("https://fakestoreapi.com/products");
      setProductsData(products.data);
      setStoreProductsData(products.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar sidebar={sidebar} showSidebar={showSidebar} />
      <div className="container">
        <Slider
          sidebar={sidebar}
          storeProductsData={storeProductsData}
          setProductsData={setProductsData}
        />
        <ProductList
          productsData={productsData}
          loading={loading}
          visibleItems={visibleItems}
        />
      </div>
      <Pagination setVisibleItems={setVisibleItems} loading={loading} />
    </div>
  );
}

export default App;
