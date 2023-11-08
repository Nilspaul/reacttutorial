import { useState, useEffect } from 'react';

const Product = (props) => {
  const { data } = props;

  return (
    <div key={data.key} className="product">
      <img src={data.image} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.desc}</p>
      <p>Preis: {data.price} EUR</p>
   </div>
  );
}

export default Product;