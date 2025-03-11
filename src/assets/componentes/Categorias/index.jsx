import Accessories from './assets/Accessories.png';
import Ayurveda from './assets/Ayurveda.png';
import Gainers from './assets/Gainers.png';
import HealthFood from './assets/Health Food.png';
import PWorkout from './assets/Pre-Workout.png';
import Proteins from './assets/Proteins.png';
import { useState, useEffect } from 'react';
import './styles.css'; 

export default function Categorias () {
    return (
        <div className="categorias-container">
            <div className="title-wrapper">
            <span className="vertical-bar">|</span> 
            <h1>Shop by Categories</h1>
            </div>
            <ul className="categorias-list">
                <li className="categoria-item">
                    <a href="#">
                        <img src={HealthFood} alt='Ícone de Comida Saudável'/>
                        <span>Health Food</span>
                    </a>
                </li>
                <li className="categoria-item">
                    <a href="#">
                        <img src={Proteins} alt='Ícone de Proteína'/>
                        <span>Proteins</span>
                    </a>
                </li>
                <li className="categoria-item">
                    <a href="#">
                        <img src={Gainers} alt='Ícone de Gainers'/>
                        <span>Gainers</span>
                    </a>
                </li>
                <li className="categoria-item">
                    <a href="#">
                        <img src={PWorkout} alt='Ícone de Pre-Workout'/>
                        <span>Pre-Workout</span>
                    </a>
                </li>
                <li className="categoria-item">
                    <a href="#">
                        <img src={Accessories} alt='Ícone de Accessories'/>
                        <span>Accessories</span>
                    </a>
                </li>
                <li className="categoria-item">
                    <a href="#">
                        <img src={Ayurveda} alt='Ícone de Ayurveda'/>
                        <span>Ayurveda</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

