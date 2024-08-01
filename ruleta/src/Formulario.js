import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import BedtimeSharpIcon from '@mui/icons-material/BedtimeSharp';
import InputAdornment from '@mui/material/InputAdornment';
import Ruleta from "./Ruleta";
import FormularioParticipante from "./FormularioParticipante";
import "./Formulario.css";
import ironIcon from "./assets/ironIcon.png";
import bronzeIcon from "./assets/bronzeIcon.png";
import silverIcon from "./assets/silverIcon.png";
import goldIcon from "./assets/goldIcon.png";
import platinumIcon from "./assets/platinumIcon.png";
import emeraldIcon from "./assets/emeraldIcon.png";
import diamondIcon from "./assets/diamondIcon.png";

const ratingIcons = {
    1: ironIcon,
    2: bronzeIcon,
    3: silverIcon,
    4: goldIcon,
    5: platinumIcon,
    6: emeraldIcon,
    7: diamondIcon,
};

const Formulario = () => {
    const [showForm, setShowForm] = useState(false);
    
    const [inputData, setInputData] = useState([
        { id: uuidv4(), text: "Pericles", rating: 6 },
        { id: uuidv4(), text: "Rego", rating: 7 },
        { id: uuidv4(), text: "Guillén", rating: 7 },
        { id: uuidv4(), text: "Iván", rating: 4 },
        { id: uuidv4(), text: "Antonetti", rating: 5 },
        { id: uuidv4(), text: "Barbara", rating: 1 },
        { id: uuidv4(), text: "Toño", rating: 1 },
        { id: uuidv4(), text: "Bisbi", rating: 1 }
    ]);

    const [initialData, setInitialData] = useState([]);

    const handleEditParticipant = (e, index) => {
        const { value } = e.target;
        const list = [...inputData];
        list[index].text = value;
        setInputData(list);
    };

    const handleRemoveParticipant = (index) => {
        const list = [...inputData];
        list.splice(index, 1);
        setInputData(list);
    };

    const handleAddParticipant = ({ name, rating }) => {
        setInputData([...inputData, { text: name, id: uuidv4(), rating }]);
        setInitialData([...inputData, { text: name, id: uuidv4(), rating }]);
    };

    const handleRemoveWinner = (winnerText) => {
        setInputData(inputData.filter(participant => participant.text !== winnerText));
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const calculateTotalRating = () => {
        return inputData.reduce((sum, participant) => sum + participant.rating, 0);
    };

    const resetParticipants = () => {
        setInputData(initialData); // Restaurar la lista de participantes al estado inicial
    };

    return (
        <div className="page-container">
            <div className="title-container">
                <h1>La Pericleta</h1>
            </div>
            <div className="form-container">
                <div className="list-container">
                    <div className="list-content">
                        <ul className="items">
                            {inputData.map((x, index) => (
                                <li key={x.id} className="list-item">
                                    <div className="item">
                                        <TextField
                                            color="secondary"
                                            variant="outlined"
                                            value={x.text}
                                            onChange={(e) => handleEditParticipant(e, index)}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <img
                                                            src={ratingIcons[x.rating]}
                                                            alt="icon"
                                                            style={{ width: 38, height: 38, marginRight: 8 }}
                                                        />
                                                    </InputAdornment>
                                                ),
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        {inputData.length !== 1 &&
                                                            <IconButton type="button" onClick={() => handleRemoveParticipant(index)} className="button">
                                                                <BedtimeSharpIcon />
                                                            </IconButton>}
                                                    </InputAdornment>
                                                )
                                            }}
                                            className="input"
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="add-button-container">
                            <button
                                onClick={toggleForm}
                                className="add-button"
                            >
                                <BiPlus />
                            </button>
                        </div>
                        {showForm && <FormularioParticipante onClose={toggleForm} onAddParticipant={handleAddParticipant} />}
                    </div>
                </div>
                <div className="ruleta-container">
                    <Ruleta data={inputData} onWinner={handleRemoveWinner} totalRating={calculateTotalRating()} onResetParticipants={resetParticipants} />
                </div>
            </div>
        </div>
    );
};

export default Formulario;
