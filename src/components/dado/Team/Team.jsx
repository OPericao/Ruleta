import React, { useState } from 'react';
import styles from './Team.module.css';

import face1 from '../../../assets/diceIcons/normalDice/diceFace1.png';
import face2 from '../../../assets/diceIcons/normalDice/diceFace2.png';
import face3 from '../../../assets/diceIcons/normalDice/diceFace3.png';
import face4 from '../../../assets/diceIcons/normalDice/diceFace4.png';
import face5 from '../../../assets/diceIcons/normalDice/diceFace5.png';

function Team({ equipo }) {
    const [players, setPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState("");

    const backgroundClass = equipo === 'Rojo' ? styles.redBackground : styles.blueBackground;

    const playerIcons = [face1, face2, face3, face4, face5];

    function handleInputChange(event) {
        setNewPlayer(event.target.value);
    }

    function addPlayer() {
        if (newPlayer.trim() !== "") {
            setPlayers(p => [...p, newPlayer]);
            setNewPlayer("");
        }
    }

    function removePlayer(index) {
        setPlayers(players.filter((_, i) => i !== index));
    }

    function movePlayerUp(index) {
        if (index > 0) {
            const updatedPlayers = [...players];
            [updatedPlayers[index], updatedPlayers[index - 1]] =
                [updatedPlayers[index - 1], updatedPlayers[index]];
            setPlayers(updatedPlayers);
        }
    }

    function movePlayerDown(index) {
        if (index < players.length - 1) {
            const updatedPlayers = [...players];
            [updatedPlayers[index], updatedPlayers[index + 1]] =
                [updatedPlayers[index + 1], updatedPlayers[index]];
            setPlayers(updatedPlayers);
        }
    }


    return (
        <div className={`${styles['team-main-container']} ${backgroundClass}`}>
            <div className={styles['team-title-name']}>
                {(() => {
                    switch (equipo) {
                        case "Azul":
                            return <h2>Equipo Azul</h2>;
                        case "Rojo":
                            return <h2>Equipo Rojo</h2>;
                        default:
                            return <h2>Equipo</h2>;
                    }
                })()}
            </div>

            <ol>
                {players.map((player, index) =>
                    <li className={styles['team-players']} key={index}>
                        <img className={styles['player-dice-icon']} src={playerIcons[index]} alt="cara"></img>
                        <span className={styles['player-text']}>{player}</span>
                        <button className={styles['delete-player-button']} onClick={() => removePlayer(index)}>
                            🗑
                        </button>
                        <div className={styles['move-player-button']}>
                            {(() => {
                                switch (index) {
                                    case 0:
                                        return (
                                            <button onClick={() => movePlayerDown(index)}>
                                                ⬇
                                            </button>
                                        );
                                    case players.length - 1:
                                        return (
                                            <button onClick={() => movePlayerUp(index)}>
                                                ⬆
                                            </button>
                                        );
                                    default:
                                        return (
                                            <>
                                                <button onClick={() => movePlayerUp(index)}>
                                                    ⬆
                                                </button>
                                                <button onClick={() => movePlayerDown(index)}>
                                                    ⬇
                                                </button>
                                            </>
                                        );
                                }
                            })()}
                        </div>
                    </li>
                )}
            </ol>

            <div className={styles['new-player-area']}>
                {players.length < 5 ?
                    (<>
                        <input
                            className={styles['new-player-text']}
                            type="text"
                            placeholder="Nombre de Invocador"
                            value={newPlayer}
                            onChange={handleInputChange}
                        />
                        <button
                            className={styles['add-player-team']}
                            onClick={addPlayer}>
                            Añadir
                        </button>
                    </>) :
                    (<div className={styles['team-limit-message']}>Equipo lleno</div>)
                }
            </div>
        </div>
    );
}

export default Team;
