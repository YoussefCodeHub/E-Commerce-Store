import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ setSearchQuery }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container-fluid">
                    {/* Site Logo */}
                    <Link className="navbar-brand" to="/">ShopMate</Link>

                    {/* Toggle button for small screens */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {/* Home Link */}
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/">
                                    <i className="bi bi-house-door"></i> Home
                                </Link>
                            </li>

                            {/* About Link */}
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/about">
                                    <i className="bi bi-info-circle"></i> About
                                </Link>
                            </li>

                            {/* Offers Link */}
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/offers">
                                    <i className="bi bi-gift"></i> Offers
                                </Link>
                            </li>

                            {/* Search Bar */}
                            <li className="nav-item mx-3">
                                <input 
                                    type="search" 
                                    className="form-control" 
                                    placeholder="Search products..." 
                                    value={searchTerm}
                                    onChange={handleSearch}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
