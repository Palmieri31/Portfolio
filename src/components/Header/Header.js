import React from 'react';
import './Header.css';

export default function Header() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">FP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">TECNOLOGIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">PORTFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
