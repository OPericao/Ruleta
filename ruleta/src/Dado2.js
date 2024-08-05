import React from 'react';
import { Link } from 'react-router-dom';

const Dado1 = () => {
    return (
        <div className="Dado1-container">
            <Link to="/dadosSelector" className="back-button-link">
                <button className="back-button">Cambiar tipo de dado</button>
            </Link>
            <h1>Dado2</h1>
        </div>
    );
};

export default Dado1;
