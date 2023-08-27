import React from 'react';

const Navbar = () => {

    const navItems = ["My Course", "My Goals", "Gratitude Library", "Action Plans", "Account"]

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="logo.png" alt="Logo" width="50" height="50" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto px-3">

                        {
                            navItems.map((item, ind) => {
                                return (
                                    <li className="nav-item mx-2">
                                        <a className="nav-link text-black" href="#">
                                            {item}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />                        
                    </form>
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-bell text-black"></i>
                            </a>
                        </li>              

                        <li><span>EN</span><i className="bi bi-caret-down-fill"></i></li>          
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
