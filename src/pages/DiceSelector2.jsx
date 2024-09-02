import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './DiceSelector2.css';

import Team from '../components/dado/Team/Team.jsx';
import { addDiceRollEvent } from '../components/dado/RandomDice.js';
import ParticipantForm from '../components/ParticipantForm.js';


import topIcon from '../assets/diceIcons/lolDice/top.png';
import jungleIcon from '../assets/diceIcons/lolDice/jungle.png';
import midIcon from '../assets/diceIcons/lolDice/mid.png';
import adcIcon from '../assets/diceIcons/lolDice/adc.png';
import supportIcon from '../assets/diceIcons/lolDice/support.png';


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
        <div className={styles['selector2-main-container']}>
            
            <div className={styles['selector2-main-header']}>
                <Link to="/diceSelector" className={styles['back-button-link']}>
                    <button className="back-button-selector2">⬅ Seleccionar otro método</button>
                </Link>

                <div className={styles['title-selector2']}>
                    <h1>ENFRENTAMIENTOS DIRECTOS</h1>
                </div>
            </div>

            <Team equipo="Azul" className={styles['blue-team']}/>
            <Team equipo="Rojo" className={styles['red-team']}/>
            
        </div>
    )

    /*
    return (
        <div className="selector2-container">
        
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
                        <div className="face front">
                            <img src={topIcon} alt="Top" />
                        </div>
                        <div className="face back">
                            <img src={jungleIcon} alt="Jungle" />
                        </div>
                        <div className="face right">
                            <img src={midIcon} alt="Mid" />
                        </div>
                        <div className="face left">
                            <img src={adcIcon} alt="ADC" />
                        </div>
                        <div className="face top">
                            <img src={supportIcon} alt="Support" />
                        </div>
                        <div className="face bottom">
                            {Puedes dejar la cara en blanco}
                        </div>
                    </div>
                </div>
                <button className="roll">Tirar los dados</button>
            </div>
        </div>
    );*/
};

export default Selector2;
