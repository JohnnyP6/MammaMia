import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import {pizzas} from '../pizzas';


const Home = () => {


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
}

export default Home;
