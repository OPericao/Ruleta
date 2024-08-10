import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Selector2.css';
import { addDiceRollEvent } from '../components/dado/RandomDice.js';
import ParticipantForm from '../components/ParticipantForm.js';

const Selector2 = () => {
    const [participants, setParticipants] = useState([
        { id: "1", text: "Pericles", rating: 6 },
        { id: "2", text: "Rego", rating: 7 },
        { id: "3", text: "Guillén", rating: 7 },
        { id: "4", text: "Iván", rating: 3 },
        { id: "5", text: "Antonetti", rating: 5 },
    ]);

    const handleUpdateParticipants = (updatedParticipants) => {
        setParticipants(updatedParticipants);
    };

    useEffect(() => {
        // Usa un timeout para asegurar que el DOM está completamente renderizado
        setTimeout(() => {
            const diceElements = document.querySelectorAll('.dice1, .dice2, .dice3');
            diceElements.forEach(dice => {
                const rollBtn = document.querySelector('.dices-container .roll');
                if (dice && rollBtn) {
                    addDiceRollEvent(dice, rollBtn);
                }
            });
        }, 0); // Este valor de 0 asegura que se ejecuta en la siguiente iteración del event loop
    }, []);

    return (
        <div className="selector2-container">
            <Link to="/dadosSelector" className="back-button-link">
                <button className="back-button">Cambiar tipo de dado</button>
            </Link>

            <div className="Title-container">
                <h1>3 DADOS ENFRENTADOS</h1>
            </div>

            <div className="ParticipantForm-container">
                <ParticipantForm
                    initialParticipants={participants}
                    onUpdateParticipants={handleUpdateParticipants}
                />
            </div>

            <div className="dices-container">
                <div className="dices-row">
                    <div className="dice1">
                        <div className="face front"></div>
                        <div className="face back"></div>
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face right"></div>
                        <div className="face left"></div>
                    </div>
                    <div className="dice2">
                        <div className="face front"></div>
                        <div className="face back"></div>
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face right"></div>
                        <div className="face left"></div>
                    </div>
                    <div className="dice3">
                        <div className="face front"></div>
                        <div className="face back"></div>
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face right"></div>
                        <div className="face left"></div>
                    </div>
                </div>
                <button className="roll">Tirar los dados</button>
            </div>
        </div>
    );
};

export default Selector2;
