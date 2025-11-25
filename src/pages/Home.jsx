import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

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
      {/* 🔥 Este header queda FULL WIDTH, fuera del main limitado */}
      <div className="home-header-wrapper">
        <Header />
      </div>

      {/* 🔥 Todo lo demás queda dentro del main (que ya está centrado) */}
      <div className="row g-3 mt-4">
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
