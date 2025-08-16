import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand"><Link to="/">My Library</Link></div>
        <div className="links">
          <Link to="/">Home</Link>
          {user && <Link to="/mybooks">My Books</Link>}
          {!user && <Link to="/login">Login</Link>}
          {!user && <Link to="/register">Register</Link>}
          {user && <button onClick={handleLogout}>Logout</button>}
        </div>
        <div className="user">{user ? user.email : ''}</div>
      </div>
    </nav>
  );
};

export default Navbar;
