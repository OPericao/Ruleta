import React, { useState } from 'react';
import { Wheel } from "react-custom-roulette";

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import './Ruleta.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Ruleta = ({ data, onWinner }) => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [winner, setWinner] = useState(null);
    const [winnersHistory, setWinnersHistory] = useState(Array(5).fill(null)); // Inicialmente lleno de null

    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
    };

    const handleStopSpinning = () => {
        setMustSpin(false);
        const currentWinner = data[prizeNumber].text;

        // Encuentra el primer índice disponible (null) en el historial de ganadores
        setWinnersHistory(prevHistory => {
            const newHistory = [...prevHistory];
            const firstNullIndex = newHistory.indexOf(null);
            
            if (firstNullIndex !== -1) {
                newHistory[firstNullIndex] = currentWinner;
            } else {
                // Si no hay espacios disponibles, desplaza la lista y agrega el nuevo ganador al final
                newHistory.shift();
                newHistory.push(currentWinner);
            }

            return newHistory;
        });

        setWinner(currentWinner);
        
        // Llama a la función onWinner pasada como prop
        onWinner(currentWinner);
    };

    return (
        <>
            <div align="center" className="roulette-container">
                <Wheel
                    mustStartSpinning={mustSpin}
                    spinDuration={[0.2]}
                    prizeNumber={prizeNumber}
                    data={data}
                    outerBorderColor={["#ccc"]}
                    outerBorderWidth={[9]}
                    innerBorderColor={["#f2f2f2"]}
                    radiusLineColor={["transparent"]}
                    radiusLineWidth={[1]}
                    textColors={["#f5f5f5"]}
                    textDistance={55}
                    fontSize={[10]}
                    backgroundColors={[
                        "#3f297e",
                        "#175fa9",
                        "#169ed8",
                        "#239b63",
                        "#64b031",
                        "#efe61f",
                        "#f7a416",
                        "#e6471d",
                        "#dc0936",
                        "#e5177b",
                        "#be1180",
                        "#871f7f"
                    ]}
                    onStopSpinning={handleStopSpinning}
                />
                <button className="button roulette-button" onClick={handleSpinClick}>
                    Girar
                </button>
                <div className="stack-container">
                  <Stack
                      direction="row"
                      divider={<Divider orientation="vertical" flexItem />}
                      spacing={2}
                      sx={{ mt: 2 }} // Espacio arriba del Stack
                  >
                      {winnersHistory.map((winner, index) => (
                          <Item key={index}>
                              {winner ? winner : <span style={{ color: 'gray' }}>-</span>}
                          </Item>
                      ))}
                  </Stack>
                </div>
                {winner && (
                    <div className="winner-message">
                        <div className="winner-header">Ganador de esta ronda:</div>
                        <div className="winner-name">{winner}</div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Ruleta;
