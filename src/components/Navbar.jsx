import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#4b2e2e] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          JCafe
        </Link>
        <div className="space-x-6 text-sm md:text-base">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/menu" className="hover:text-yellow-300">Menu</Link>
          <Link to="/reserve" className="hover:text-yellow-300">Reserve</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;