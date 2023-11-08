import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Productlist = (props) => {
  const { title, list } = props;
  const [modifiedList, setModifiedList] = useState([]);

  useEffect(() => {
    const modifiedProducts = list.map((product) => ({
      ...product,
      price: calculatePrice(product), //Preisberechnungsfunktion aufrufen
    }));

    // Aktualisiere den Zustand mit der bearbeiteten Liste
    setModifiedList(modifiedProducts);
  }, [list]); // Führe den Effekt aus, wenn props.list sich ändert

  const calculatePrice = (product) => {
    return product.title.length * 10;
  };

  return (
    <div>
      <h2>{title}:</h2>
      <div className="product-list">
        {modifiedList.map((product, index) => (
          <div key={index} className="product">
            <div>
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
              <img src={product.image} alt={product.title} />
              <p>Preis: {product.price} EUR</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Productlist.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array
};

Productlist.defaultProps = {
    title: 'Produkte' , // Setze einen Default-Wert für den Titel
    list: [{title: "test", price:"60", image: "/assets/burger.png"}]
};

export default Productlist;
