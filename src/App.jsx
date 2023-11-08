import { useState, useEffect } from 'react';
import reactLogo from '/assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Productlist from './components/Productlist'; // Importiere die Productlist-Komponente

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Hier führen wir die Anfrage an deine Express API durch
    fetch('http://127.0.0.1:3317/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Fehler bei der Anfrage:', error));
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Productlist list={products} /> {/* Verwende die Productlist-Komponente hier */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
