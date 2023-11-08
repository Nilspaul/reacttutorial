import { useState, useEffect } from 'react';

import Navigation from './Navbar';
import Productlist from './Productlist';

const Main = () => {
    const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const handleButtonClick = () => {
    console.log(count)
  };
  useEffect(() => {
    // Hier führen wir die Anfrage an deine Express API durch
    fetch('http://127.0.0.1:3317/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Fehler bei der Anfrage:', error));
  }, []);

  return (
    <div>
      <Navigation />
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
