import React from 'react'
import {Link, NavLink } from 'react-router-dom'
function NavBar() {
    return (
        <nav className=" navbar-dark bg-dark navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link exact to='/' className="navbar-brand">Heni Rjab</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to='/' className="nav-link ">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/projects' className="nav-link ">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/skills' className="nav-link ">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className="nav-link ">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar