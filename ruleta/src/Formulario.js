import React, { useState } from "react";
import {BiPlus} from "react-icons/bi";
import { v4 as uuidv4} from "uuid";

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import BedtimeSharpIcon from '@mui/icons-material/BedtimeSharp';
import InputAdornment from '@mui/material/InputAdornment';

import Ruleta from "./Ruleta";
import "./Formulario.css";

const Formulario = () => {
    const [inputData, setInputData] = useState([
        {
            id: uuidv4(),
            text: "Pericles"
        },
        {
            id: uuidv4(),
            text: "Rego"
        },
        {
            id: uuidv4(),
            text: "Guillén"
        },
        {
            id: uuidv4(),
            text: "Iván"
        }
    ]);

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

    const handleAddParticipant = (e, participant) => {
        setInputData([...inputData, {text:"", id: uuidv4()}]);
    };

    return(
        <div className="form">
            <div className="title">
                <h1>Ruleta</h1>
            </div>
            <Ruleta data={inputData}/>
            <ul className="items" style={{ listStyle: "none" }}>
                {inputData.map((x, index) => (
                <li key={x.id} className="list-item">
                    <div className="item">
                        <TextField
                            color="secondary"
                            variant="outlined"
                            value={x.text}
                            onChange={(e) => handleEditParticipant(e, index)}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    {inputData.length !== 1 &&
                                        <IconButton type="button" onClick={() => handleRemoveParticipant(index)}>
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
            <button
                onClick={handleAddParticipant}
                style={{ marginLeft: "2.1rem" }}
                className="button"
            >
                <BiPlus />
            </button>
        </div>
    );
};

export default Formulario;