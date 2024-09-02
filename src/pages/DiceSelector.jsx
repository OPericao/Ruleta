import React from 'react';
import { Link } from 'react-router-dom';

import styles from './DiceSelector.module.css';

import Dice1 from '../assets/diceIcons/dice1.png';
import Dice2 from '../assets/diceIcons/dice2.png';

function DadosSelector() {
    return (
        <>
            <div className={styles['diceselector-header']}>
                <Link to="/">
                    <button className={styles['diceselector-back-button']}>⬅ Página Principal</button>
                </Link>
                <h1>SELECCIONA EL TIPO DE DADO</h1>
            </div>

            <div className={styles['diceselector-buttons']}>
                <Link to="/diceSelector/1" className={styles['diceselector-link']}>
                    <button className={styles['diceselector-button']}>
                        <img src={Dice1} alt="Dice1 Icon"></img>
                        <div className={styles['diceselector-button-text']}>
                            <h2 className={styles['diceselector-button-title']}>1 dado para todos:</h2>
                            <p> El dado elegirá aleatoriamente a cada jugador y se colocará en el equipo correspondiente, 
                                por lo tanto el dado tendrá tantas caras como jugadores disponibles.
                            </p>
                        </div>
                    </button>
                </Link>
                <Link to="/diceSelector/2" className={styles['diceselector-link']}> 
                    <button className={styles['diceselector-button']}>
                        <img src={Dice2} alt="Dice2 Icon"></img>
                        <div className={styles['diceselector-button-text']}>
                            <h2 className={styles['diceselector-button-title']}>2 Dados para enfrentamientos directos:</h2>
                            <p> Cada dado elegirá un jugador, creando así un enfrentamiento directo. La posición del duelo se puede cambiar.
                                Cada dado tendrá tantas caras como jugadores haya disponibles, pero nunca podrá tocar a un jugador contra sí mismo.
                            </p>
                        </div>
                    </button>
                </Link>
            </div>
        </>
    );
};

export default DadosSelector;
