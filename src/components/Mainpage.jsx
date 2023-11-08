import { useState, useEffect } from 'react';

import Productlist from './Productlist';
import remoteProducts from '../data/remoteProducts';

const Main = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  const handleButtonClick = () => {
    setCount((count) => count + 1)
    console.log(count)
  };

  useEffect(() => {
    async function fetchProducts() {
      // Warten auf die Remote-Daten
      const data = await remoteProducts();

      // dann als Produkte setzen
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Vite + React - Tutorial</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleButtonClick}>
          count is {count}
        </button>
      </div>
      <Productlist title="Produkte" list={products} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
);
}

export default Main;
