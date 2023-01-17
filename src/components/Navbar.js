import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
                <Link to="/" className='text-decoration-none'>
                <h3 className='ms-2'>Embedded Systems Batch - 43</h3>
                </Link>
        </div>
     </nav>
    </div>
  );
}

export default Navbar;
