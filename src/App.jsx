import { useState, useEffect } from 'react';
import './App.css';
import Productlist from './components/Productlist'; // Importiere die Productlist-Komponente

function App() {
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
    <>
      <h1>Vite + React - Tutorial</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleButtonClick}>
          count is {count}
        </button>
        <Productlist title="Liste der Produkte" list={products} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
