// src/Components/MainCard.js

import React from 'react';
import '../index.css';

import { Link } from 'react-router-dom';

import ButtonOne from './ButtonOne';

function MainCard() {
    return (
        <div className="main-card">
            <h1>Välkommen till Femjur Lund</h1>

            <p>
            Feministiska juriststudenter Lund är en partipolitiskt
            och religiöst obunden förening som verkar ideellt för att
            främja normkritik och ett genusperspektiv på juristprogrammet
            vid Lunds Universitet.
            </p>

            <ButtonOne link="/member" text="BLI MEDLEM" />

            <h3>Skrolla ner för att läsa mer!</h3>
        </div>
    );
}

export default MainCard;
