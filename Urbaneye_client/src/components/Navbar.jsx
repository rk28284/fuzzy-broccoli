import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
          Urban Eye
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          

          
          
              <Link to="/create-complaint" className="hover:text-blue-300">
                Raise Complaint
              </Link>
              <Link to="/complaint" className="hover:text-blue-300">
                Dashboard
              </Link>
             
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
              >
                Logout
              </button>
          

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
