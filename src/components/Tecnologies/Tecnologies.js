import React from 'react';
import './Tecnologies.css';
// REACT FOTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3, faNode, faReact, faGithub, faJs, faNpm, faBootstrap} from '@fortawesome/free-brands-svg-icons';



export default function Tecnologies() {
    return (
        <div className="container-fluid tecno-container p-0">
            <h2>T E C N O L O G I E S</h2>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item"><FontAwesomeIcon icon={faHtml5} size="4x" /><h4>Html5</h4></li>
                            <li className="list-group-item"><FontAwesomeIcon icon={faCss3} size="4x" /><h4>Css</h4></li>
                            <li className="list-group-item"><FontAwesomeIcon icon={faJs} size="4x" /><h4>JavaScript</h4></li>
                            <li className="list-group-item"><FontAwesomeIcon icon={faReact} size="4x" /><h4>ReactJs</h4></li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item"><FontAwesomeIcon icon={faGithub} size="4x" /><h4>Github</h4></li>
                            <li className="list-group-item"><FontAwesomeIcon icon={faNode} size="4x" /><h4>NodeJs</h4></li>
                            <li className="list-group-item"><FontAwesomeIcon icon={faNpm} size="4x" /><h4>npm</h4></li>
                            <li className="list-group-item"><FontAwesomeIcon icon={faBootstrap} size="4x" /><h4>Bootstrap</h4></li>
                        </ul>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
    )
}
