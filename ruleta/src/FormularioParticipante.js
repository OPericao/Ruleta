import React, { useState } from 'react';

import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

import ironIcon from "./assets/ironIcon.png";
import bronzeIcon from "./assets/bronzeIcon.png";
import silverIcon from "./assets/silverIcon.png";
import goldIcon from "./assets/goldIcon.png";
import platinumIcon from "./assets/platinumIcon.png";
import emeraldIcon from "./assets/emeraldIcon.png";
import diamondIcon from "./assets/diamondIcon.png";

import './FormularioParticipante.css';

const FormularioParticipante = ({ onClose, onAddParticipant }) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddParticipant({ name, rating }); // Añade un nuevo participante
        setName('');  // Restablece el nombre a casilla vacía
        setRating(1); // Restablece la puntuación a 1 (elo)
        onClose();
    };

    const StyledRating = styled(Rating)(({ theme }) => ({
        '& .MuiRating-icon': {
            color: theme.palette.action.disabled,
        },
        '& .MuiRating-iconFilled': { // Estilado para el icono seleccionado
            color: '#000', // Color negro para el icono seleccionado
            borderRadius: '50%', // Bordes redondeados
            border: '2px solid rgba(0, 0, 0, 0.5)', // Borde un poco más oscuro
            boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)', // Sombra un poco más prominente
            padding: '2px', // Espaciado interno para el borde
            margin: '1px', // Espaciado alrededor del icono para evitar que se sobreponga
        },
    }));

    const customIcons = {
        1: {
          icon: <img src={ironIcon} alt="hierro" style={{width:'37px', height:'37px'}}/>
        },
        2: {
            icon: <img src={bronzeIcon} alt="bronce" style={{width:'37px', height:'37px'}}/>
          },
        3: {
          icon: <img src={silverIcon} alt="plata" style={{width:'37px', height:'37px'}}/>
        },
        4: {
          icon: <img src={goldIcon} alt="oro" style={{width:'37px', height:'37px'}}/>
        },
        5: {
          icon: <img src={platinumIcon} alt="platino" style={{width:'37px', height:'37px'}}/>
        },
        6: {
          icon: <img src={emeraldIcon} alt="esmeralda" style={{width:'37px', height:'37px'}}/>
        },
        7: {
            icon: <img src={diamondIcon} alt="diamante" style={{width:'37px', height:'37px'}}/>
        }
      };

    function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
    }
    
    IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Formulario Adicional</h2>
                <form onSubmit={handleSubmit}>
                    <TextField    // Cuadro de texto en el que se introduce el nombre
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <StyledRating   // Lista de iconos para valorar
                        name="highlight-selected-only"
                        value={rating}
                        max={7}
                        onChange={(e, newValue) => setRating(newValue)}
                        IconContainerComponent={IconContainer}
                        getLabelText={(value) => customIcons[value].label}
                        highlightSelectedOnly
                    />
                    <button type="submit">Enviar</button>
                    <button type="button-form" onClick={onClose}>Cerrar</button>
                </form>
            </div>
        </div>
    );
};

export default FormularioParticipante;
