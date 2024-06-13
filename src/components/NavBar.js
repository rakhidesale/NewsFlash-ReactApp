import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const NavBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const navItems = ['/', '/business', '/entertainment', '/general', '/health', '/science', '/sports', '/technology'];
    const foundNavItem = navItems.find(item => item.toLowerCase().includes(searchTerm.toLowerCase()));

    if (foundNavItem) {
      navigate(foundNavItem);
    } else {
      alert('Nav item not found');
    }
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundImage: 'linear-gradient(to right, #4a3d1e, #4a3621, #463025, #402c28, #372929)', fontWeight: '500', fontFamily: 'Georgia, serif' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsFlash</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownAll" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All News Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownAll">
                  <li><Link className="dropdown-item" to="/business">Business</Link></li>
                  <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                  <li><Link className="dropdown-item" to="/general">General</Link></li>
                  <li><Link className="dropdown-item" to="/health">Health</Link></li>
                  <li><Link className="dropdown-item" to="/science">Science</Link></li>
                  <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                  <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default NavBar
