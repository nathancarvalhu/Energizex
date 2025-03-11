import { useState, useEffect } from 'react';
import './styles.css'; 
import Carrossel from './carrossel'; 

export default function Vendidos () {
    return(
        <div className="categorias-container">
        <div className="title-wrapper">
        <span className="vertical-bar">|</span> 
        <h1>Best Seller</h1>
        </div>
        <ul className="categorias-lista">
            <li className="categoria-itens">
                <a href="#">
                    <span>Health Food</span>
                </a>
            </li>
            <li className="categoria-itens">
                <a href="#">
                    <span>Proteins</span>
                </a>
            </li>
            <li className="categoria-itens">
                <a href="#">
                    <span>Gainers</span>
                </a>
            </li>
            <li className="categoria-itens">
                <a href="#">
                    <span>Pre-Workout</span>
                </a>
            </li>
            <li className="categoria-itens">
                <a href="#">
                    <span>Accessories</span>
                </a>
            </li>
            <li className="categoria-itens">
                <a href="#">
                    <span>Ayurveda</span>
                </a>
            </li>
            </ul> 
             {/* Carrossel */}
             <Carrossel />
        </div>
        
    )
}