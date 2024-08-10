import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import BedtimeSharpIcon from '@mui/icons-material/BedtimeSharp';
import InputAdornment from '@mui/material/InputAdornment';
import { BiPlus } from "react-icons/bi";
import FormularioParticipante from "./FormularioParticipante";
import ironIcon from "../assets/ironIcon.png";
import bronzeIcon from "../assets/bronzeIcon.png";
import silverIcon from "../assets/silverIcon.png";
import goldIcon from "../assets/goldIcon.png";
import platinumIcon from "../assets/platinumIcon.png";
import emeraldIcon from "../assets/emeraldIcon.png";
import diamondIcon from "../assets/diamondIcon.png";
import "./ParticipantForm.css";

const ratingIcons = {
    1: ironIcon,
    2: bronzeIcon,
    3: silverIcon,
    4: goldIcon,
    5: platinumIcon,
    6: emeraldIcon,
    7: diamondIcon,
};

const ParticipantForm = ({ initialParticipants, onUpdateParticipants }) => {
    const [showForm, setShowForm] = useState(false);
    const [inputData, setInputData] = useState(initialParticipants);

    const handleEditParticipant = (e, index) => {
        const { value } = e.target;
        const list = [...inputData];
        list[index].text = value;
        setInputData(list);
        onUpdateParticipants(list);
    };

    const handleRemoveParticipant = (index) => {
        const list = [...inputData];
        list.splice(index, 1);
        setInputData(list);
        onUpdateParticipants(list);
    };

    const handleAddParticipant = ({ name, rating }) => {
        if (inputData.length >= 10) {
            return; // No permitir más de 10 participantes
        }

        const newParticipant = { text: name, id: uuidv4(), rating };
        const newData = [...inputData, newParticipant];
        setInputData(newData);
        onUpdateParticipants(newData);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="participant-form-container">
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
                {inputData.length < 10 ? (
                    <button onClick={toggleForm} className="add-button">
                        <BiPlus />
                    </button>
                ) : (
                    <div className="limit-message">Número máximo de jugadores alcanzado</div>
                )}
            </div>
            {showForm && inputData.length < 10 && (
                <FormularioParticipante onClose={toggleForm} onAddParticipant={handleAddParticipant} />
            )}
        </div>
    );
};

export default ParticipantForm;
