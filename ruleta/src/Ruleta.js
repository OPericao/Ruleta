import React, { useState, useEffect, useRef } from 'react';
import { Wheel } from "react-custom-roulette";
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import './Ruleta.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Ruleta = ({ data, onWinner, onResetParticipants }) => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [winner, setWinner] = useState(null);
    const [winnersHistory, setWinnersHistory] = useState(Array(5).fill(null));
    const [initialData, setInitialData] = useState(data);
    const [rouletteData, setRouletteData] = useState(data);
    const [winnersRatingSum, setWinnersRatingSum] = useState(0);
    const [participantsRatingSum, setParticipantsRatingSum] = useState(0);
    const [balanceMessage, setBalanceMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const alertRef = useRef(null);

    const handleSpinClick = () => {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
    };

    useEffect(() => {
        setInitialData(data);

        const addShortString = data.map((item) => {
            return {
                completeOption: item.text,
                option:
                    item.text.length >= 30
                        ? item.text.substring(0, 30).trimEnd() + "..."
                        : item.text
            };
        });
        setRouletteData(addShortString);
    }, [data]);

    useEffect(() => {
        const remainingParticipants = initialData.filter(p => !winnersHistory.map(w => w?.name).includes(p.text));
        const totalRemainingRating = remainingParticipants.reduce((sum, participant) => sum + participant.rating, 0);
        setParticipantsRatingSum(totalRemainingRating);

        if (winnersHistory.every(winner => winner !== null)) {
            const difference = Math.abs(winnersRatingSum - totalRemainingRating);
            if (difference > 4) {
                setBalanceMessage("Los equipos están desbalanceados.");
                setShowAlert(true);
                onResetParticipants(); // Notificar al formulario que debe restaurar la lista
                setWinnersHistory(Array(5).fill(null));
            } else {
                setBalanceMessage("");
                setShowAlert(false);
            }
        }
    }, [winnersHistory, initialData, winnersRatingSum, onResetParticipants]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (alertRef.current && !alertRef.current.contains(event.target)) {
                setShowAlert(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleStopSpinning = () => {
        setMustSpin(false);
        const currentWinner = data[prizeNumber].text;
        const currentRating = data[prizeNumber].rating;

        setWinnersHistory(prevHistory => {
            const newHistory = [...prevHistory];
            const firstNullIndex = newHistory.indexOf(null);
            
            if (firstNullIndex !== -1) {
                newHistory[firstNullIndex] = { name: currentWinner, rating: currentRating };
            } else {
                newHistory.shift();
                newHistory.push({ name: currentWinner, rating: currentRating });
            }

            const totalWinnersRating = newHistory.reduce((sum, winner) => sum + (winner ? winner.rating : 0), 0);
            setWinnersRatingSum(totalWinnersRating);

            return newHistory;
        });

        setWinner(currentWinner);

        onWinner(currentWinner);
    };

    return (
        <>
            <div align="center" className="ruleta-container">
                {showAlert && balanceMessage && (
                    <div className="alert-container">
                        <div className="alert-message" ref={alertRef}>
                            <Alert variant="outlined" severity="error">
                                {balanceMessage}
                            </Alert>
                        </div>
                    </div>
                )}
                <Wheel
                    mustStartSpinning={mustSpin}
                    spinDuration={[0.3]}
                    prizeNumber={prizeNumber}
                    data={rouletteData}
                    outerBorderColor={["#ccc"]}
                    outerBorderWidth={[9]}
                    innerBorderColor={["#f2f2f2"]}
                    radiusLineColor={["transparent"]}
                    radiusLineWidth={[1]}
                    textColors={["#f5f5f5"]}
                    textDistance={55}
                    fontSize={[20]}
                    backgroundColors={[
                        "#E57373",
                        "#81C784",
                        "#64B5F6",
                        "#BA68C8",
                        "#FF8A65",
                        "#4FC3F7",
                        "#FFD54F",
                        "#4DB6AC",
                        "#A1887F",
                        "#90A4AE"
                    ]}
                    onStopSpinning={handleStopSpinning}
                />
                {data.length !== 1 && <button className="button roulette-button" onClick={handleSpinClick}>
                    Girar
                </button>}
                <div className="stack-container">
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                        sx={{ mt: 2 }}
                    >
                        {winnersHistory.map((winner, index) => (
                            <Item key={index}>
                                {winner ? winner.name : <span style={{ color: 'gray' }}>-</span>}
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
