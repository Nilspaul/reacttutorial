import PropTypes from 'prop-types';

const Productlist = (props) => (
  <div>
    <h2>Produkte:</h2>
    <div className="product-list"> {/* Verwende eine äußere Container-Div mit der Klasse product-list */}
      {props.list.map((product, index) => (
        <div key={index} className="product"> {/* Verwende eine Div für jedes Produkt mit der Klasse product */}
          <div>
            <h3>{product.title}</h3>
            <p>{product.desc}</p>
            <img src={product.image} alt={product.title} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

Productlist.propTypes = {
  list: PropTypes.array
};

export default Productlist;
