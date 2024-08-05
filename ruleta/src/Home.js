import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-header">
                <h1>HOY TOCA PERSO, NO?</h1>
            </div>
            <div className="home-buttons">
                <Link to="/pericleta" style={{ textDecoration: 'none' }}>
                    <button className="home-button home-button-1">
                        <div className="home-button-background"></div>
                        <div className="home-button-text">Pericleta</div>
                    </button>
                </Link>
                <Link to="/dadosSelector" style={{ textDecoration: 'none' }}> 
                    <button className="home-button home-button-2">
                        <div className="home-button-background"></div>
                        <div className="home-button-text">Dados</div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
