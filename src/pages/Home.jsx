import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

import Ruleta from '../assets/homeIcons/roulette.png';
import Dados from '../assets/homeIcons/dice.png';

function Home() {
    return (
        <>
            <h1 className={styles['home-header']}>HOY TOCA PERSO, NO?</h1>

            <div className={styles['home-buttons']}>
                <Link to="/pericleta">
                    <button className={styles['home-button']}>
                        <img src={Ruleta} alt="Foto de la Ruleta"></img>
                        <div>Pericleta</div>
                    </button>
                </Link>
                <Link to="/diceSelector"> 
                    <button className={styles['home-button']}>
                        <img src={Dados} alt="Foto de los Dados"></img>
                        <div>Dados</div>
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Home;
