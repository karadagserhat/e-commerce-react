import React from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../components';
const HomePage = () => {
  return (
    <main className="main-container">
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
