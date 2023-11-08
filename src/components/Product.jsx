import { useState, useEffect } from 'react';
import '../css/product.css';

const Product = (props) => {
  const { data } = props;

  const [product, setProduct] = useState([]);
  const [isLiked, setIsLiked] = useState(localStorage.getItem(data.key) === 'true');

  useEffect(() => {
    const product = data;
    product.price = calculatePrice(product);

    // Aktualisiere den Zustand mit der bearbeiteten Liste
    setProduct(product);
  });

  useEffect(() => {
    // Speichere isLiked im LocalStorage, wenn es sich ändert
    localStorage.setItem(data.key, isLiked);
  }, [isLiked, data.key]);

  const calculatePrice = (product) => {
    return Math.floor( Math.log2(product.title.length * 10) );
  };

  const toggleLike = () => {
    setIsLiked(current => !current);
  }

  return (
    <div key={product.key} className={isLiked ? 'product liked' : 'product'} onClick={toggleLike}>
      <img src={product.image} alt={product.title} loading="lazy" />
      <h3>{product.title}</h3>
      <p>{product.desc}</p>
      <p>Preis: {product.price} EUR</p>
   </div>
  );
}

export default Product;