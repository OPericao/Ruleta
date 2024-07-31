import React, { useState } from 'react';

import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

import ironIcon from "./ironIcon.png";
import bronzeIcon from "./bronzeIcon.png";
import silverIcon from "./silverIcon.png";
import goldIcon from "./goldIcon.png";
import platinumIcon from "./platinumIcon.png";
import emeraldIcon from "./emeraldIcon.png";
import diamondIcon from "./diamondIcon.png";

import './FormularioParticipante.css';

const FormularioParticipante = ({ onClose, onAddParticipant }) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddParticipant({ name, rating }); 
        setName('');
        setRating(1);
        onClose();
    };

    const StyledRating = styled(Rating)(({ theme }) => ({
        '& .MuiRating-icon': {
            color: theme.palette.action.disabled,
        },
        '& .MuiRating-iconFilled': {
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
          icon: <img src={ironIcon} alt="hierro" style={{width:'43px', height:'43px'}}/>,
          label: 'Very Dissatisfied',
        },
        2: {
            icon: <img src={bronzeIcon} alt="bronce" style={{width:'43px', height:'43px'}}/>,
            label: 'Very Dissatisfied',
          },
        3: {
          icon: <img src={silverIcon} alt="plata" style={{width:'43px', height:'43px'}}/>,
          label: 'Dissatisfied',
        },
        4: {
          icon: <img src={goldIcon} alt="oro" style={{width:'43px', height:'43px'}}/>,
          label: 'Neutral',
        },
        5: {
          icon: <img src={platinumIcon} alt="platino" style={{width:'43px', height:'43px'}}/>,
          label: 'Satisfied',
        },
        6: {
          icon: <img src={emeraldIcon} alt="esmeralda" style={{width:'43px', height:'43px'}}/>,
          label: 'Very Satisfied',
        },
        7: {
            icon: <img src={diamondIcon} alt="diamante" style={{width:'43px', height:'43px'}}/>,
            label: 'Very Satisfied',
          },
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
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <StyledRating
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
