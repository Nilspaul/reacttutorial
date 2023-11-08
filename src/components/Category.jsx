import { useState, useEffect } from 'react';
import Product from './Product';
import remoteProducts from '../data/remoteProducts';

const Category = (props) => {
  const { title, list } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(products.length > 0) {
      document.title = 'Kategorie: ' + title;
    }
  }, [products]);

  const fetchProducts = async () => {
    const data = await remoteProducts(title);
    setProducts(data);
  };

  const toggleProducts = async () => {
    if (products.length > 0) {
      setProducts([]);
    } else {
      fetchProducts()
    }
  };

  return (
    <div className="category">
      <h3 onClick={toggleProducts}>{title}</h3>
      <div className="product-list">
        {products.map((product, index) => (
          <Product data={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Category;