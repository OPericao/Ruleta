import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importa el archivo CSS

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-header">
                <h1>Hoy toca perso, no?</h1>
            </div>
            <div className="home-buttons">
                <Link to="/pericleta" className="home-button home-button-1">
                    <div className="home-button-background"></div>
                    <div className="home-button-text">Pericleta</div>
                </Link>
                <button className="home-button home-button-2">
                    <div className="home-button-background"></div>
                    <div className="home-button-text">Dados</div>
                </button>
            </div>
        </div>
    );
};

export default Home;
