import React from 'react';

const Home = () => {
  return (
    <div className="bg-[#fef9f4] text-[#4b2e2e]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-[url('/coffee-bg.jpg')] bg-cover bg-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to JCafe</h1>
        <p className="text-lg md:text-2xl mt-4">Feel the warmth in every cup.</p>
        <div className="mt-6 space-x-4">
          <a href="/menu" className="bg-white text-[#4b2e2e] px-6 py-2 rounded shadow hover:bg-gray-100">View Menu</a>
          <a href="/reserve" className="bg-[#4b2e2e] text-white px-6 py-2 rounded shadow hover:bg-[#3b1e1e]">Reserve a Table</a>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-8 text-center bg-[#fff8f0]">
        <h2 className="text-3xl font-bold mb-4">Our Story - Since 2002</h2>
        <p className="max-w-xl mx-auto text-lg">
          JCafe is more than just a coffee shop — it’s a warm and welcoming space where handcrafted coffee meets heartfelt connections.
        </p>
      </section>

      {/* Signature Menu */}
      <section className="py-16 px-8 bg-[#f6ede4] text-center">
        <h2 className="text-3xl font-bold mb-8">Signature Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-4">
            <img src="/menu-mocha.jpg" alt="Mocha" className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-xl font-semibold">Mocha</h3>
            <p className="text-sm">Rich chocolate & espresso</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img src="/menu-matcha.jpg" alt="Matcha Latte" className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-xl font-semibold">Matcha Latte</h3>
            <p className="text-sm">Earthy, creamy green tea</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <img src="/menu-tiramisu.jpg" alt="Tiramisu" className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-xl font-semibold">Tiramisu</h3>
            <p className="text-sm">Classic Italian dessert</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 px-8 text-center bg-[#fff8f0]">
        <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          <p>“Best cafe in town! The mocha is incredible.” – Jane</p>
          <p>“Such a cozy vibe. I come here every weekend!” – Tom</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import ReactDOM from 'react-dom/clinet';
