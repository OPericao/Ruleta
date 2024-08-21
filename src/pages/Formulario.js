// Formulario.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ParticipantForm from "../components/ParticipantForm";
import Ruleta from "../components/ruleta/Ruleta";
import "./Formulario.css";

const Formulario = () => {
    const [participants, setParticipants] = useState([
        { id: "1", text: "Pericles", rating: 6 },
        { id: "2", text: "Rego", rating: 7 },
        { id: "3", text: "Guillén", rating: 7 },
        { id: "4", text: "Iván", rating: 3 },
        { id: "5", text: "Antonetti", rating: 5 },
    ]);

    const [initialData, setInitialData] = useState(participants);

    const handleUpdateParticipants = (updatedParticipants) => {
        setParticipants(updatedParticipants);
        setInitialData(updatedParticipants);
    };

    const calculateTotalRating = () => {
        return participants.reduce((sum, participant) => sum + participant.rating, 0);
    };

    const handleRemoveWinner = (winnerText) => {
        setParticipants(participants.filter(participant => participant.text !== winnerText));
    };

    const resetParticipants = () => {
        setParticipants(initialData); // Restaurar la lista de participantes al estado inicial
    };

    return (
        <div className="page-container">
            <div className="Dado1-container">
                <Link to="/" className="back-button-link">
                    <button className="back-button">Pagina Principal</button>
                </Link>
            </div>
            <div className="title-container">
                <h1>La Pericleta</h1>
            </div>
            <div className="form-container">
                <ParticipantForm initialParticipants={participants} onUpdateParticipants={handleUpdateParticipants} />
                <div className="ruleta-container">
                    <Ruleta data={participants} onWinner={handleRemoveWinner} totalRating={calculateTotalRating()} onResetParticipants={resetParticipants} />
                </div>
            </div>
        </div>
    );
};

export default Formulario;
