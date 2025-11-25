import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar pizza:", error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div className="pizza-page">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>

      <h3>Ingredientes</h3>
      <ul>
        {pizza.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h2>Precio: ${pizza.price}</h2>

      <button>Agregar al carrito</button>
    </div>
  );
};

export default Pizza;
