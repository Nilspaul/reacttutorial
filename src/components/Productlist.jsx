import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const Productlist = (props) => {
  const { title, list } = props;
  const [modifiedList, setModifiedList] = useState([]);

  useEffect(() => {
    const modifiedProducts = list.map((product) => ({
      ...product,
      price: product.price || calculatePrice(product), //Preisberechnungsfunktion aufrufen
    }));

    // Aktualisiere den Zustand mit der bearbeiteten Liste
    setModifiedList(modifiedProducts);
  }, [list]); // Führe den Effekt aus, wenn props.list sich ändert

  const calculatePrice = (product) => {
    return Math.floor( Math.log2(product.title.length * 10) );
  };

  return (
    <div>
      <h2>{title}:</h2>
      <div className="product-list">
        {modifiedList.map((product, index) => (
          <Product data={product} key={index}/>
        ))}
      </div>
    </div>
  );
};

Productlist.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array
};

export default Productlist;
