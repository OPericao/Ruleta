import React from 'react';
import { Link } from 'react-router-dom';
import './DadosSelector.css'; 

const DadosSelector = () => {
    return (
        <div className="DadosSelector-container">
            <Link to="/" className="back-button-link">
                <button className="back-button">Página Principal</button>
            </Link>
            <div className="DadosSelector-header">
                <h1>Selecciona el tipo de dado</h1>
            </div>
            <div className="DadosSelector-buttons">
                <Link to="/dadosSelector/1" className="Dado-button-link">
                    <button className="Dado-button Dado-button-1">
                        <div className="Dado-button-background"></div>
                        <div className="Dado-button-text">
                            <h2 className="Dado-button-title">1 dado para todos:</h2>
                            <p> El dado elegirá aleatoriamente a cada jugador y se colocará en el equipo correspondiente, 
                                por lo tanto el dado tendrá tantas caras como jugadores disponibles.
                            </p>
                        </div>
                    </button>
                </Link>
                <Link to="/dadosSelector/2" className="Dado-button-link"> 
                    <button className="Dado-button Dado-button-2">
                        <div className="Dado-button-background"></div>
                        <div className="Dado-button-text">
                            <h2 className="Dado-button-title">2 Dados para enfrentamientos directos:</h2>
                            <p> Cada dado elegirá un jugador, creando así un enfrentamiento directo. La posición del duelo se puede cambiar.
                                Cada dado tendrá tantas caras como jugadores haya disponibles, pero nunca podrá tocar a un jugador contra sí mismo.
                            </p>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DadosSelector;
