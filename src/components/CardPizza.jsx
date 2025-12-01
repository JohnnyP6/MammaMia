import React, { useContext } from 'react';
import { formatPrice } from '../utils/format';
import { CartContext } from '../context/CartContext';

const CardPizza = ({ id, name, price, ingredients = [], img }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart({ id, name, price, ingredients, img });
  };

  return (
    <div className="card h-100">
      <img
        src={img}
        className="card-img-top"
        alt={name}
        style={{ height: '180px', objectFit: 'cover' }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>

        <p className="card-text"><strong>Ingredientes:</strong></p>
        <ul>
          {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
        </ul>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">${formatPrice(price)}</span>

          <div>
            <button className="btn btn-sm btn-outline-primary me-2">
              Ver más
            </button>

            <button
              className="btn btn-sm btn-success"
              onClick={handleAdd}
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
