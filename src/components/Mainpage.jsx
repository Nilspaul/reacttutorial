import { useState, useEffect } from 'react';
import remoteCategories from '../data/remoteCategories';
import CategoryList from './CategoryList';

const Main = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    document.title = 'Startseite';

    async function fetchCategories() {
      // Warten auf die Remote-Daten
      const data = await remoteCategories();

      // anschließend als Produkte setzen
      setCategories(data);
    }

    // initaliser aufruf
    fetchCategories();
  }, []);

  const handleButtonClick = () => {
    setCount2((count2) => count2 + 1)
  };

  return (
    <>
      <h1>Vite + React - Tutorial</h1>
      <div className="card">
        <p>Einfacher Counter</p>
        <button onClick={() => setCount((count) => count + 1)}>
          1. Counter: {count}
        </button>
        <button onClick={handleButtonClick}>
          2. Counter: {count2}
        </button>
      </div>
      <hr />
      <CategoryList title="Kategorien" list={categories} />
    </>
);
}

export default Main;
