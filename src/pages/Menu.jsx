import React from 'react';

const menuItems = [
  {
    name: "Mocha",
    price: "$5.00",
    desc: "Rich chocolate & espresso",
    img: "/menu-mocha.jpg",
    category: "Coffee"
  },
  {
    name: "Matcha Latte",
    price: "$5.50",
    desc: "Earthy, creamy green tea",
    img: "/menu-matcha.jpg",
    category: "Tea"
  },
  {
    name: "Tiramisu",
    price: "$6.00",
    desc: "Classic Italian dessert",
    img: "/menu-tiramisu.jpg",
    category: "Dessert"
  },
];

const Menu = () => {
  return (
    <div className="bg-[#fffaf4] min-h-screen py-12 px-6 text-[#4b2e2e]">
      <h1 className="text-4xl font-bold text-center mb-10">Our Menu</h1>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {menuItems.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <p className="mt-2 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;