import React, { useEffect, useState } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <>
      <Header />
      <div className="row g-3">
        {pizzas.map((p, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <CardPizza {...p} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
