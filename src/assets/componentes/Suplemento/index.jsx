import { useState, useEffect } from 'react';
import Carrossel1 from './carrossel';

export default function Suplemento () {
    return(
        <div className="categorias-container">
        <div className="title-wrapper">
        <span className="vertical-bar">|</span> 
        <h1>Supplements</h1>
        </div>
        <ul className="categorias-lista">
            <li className="categoria-itens">
                <a href="#">
                    <span>Oils</span>
                </a>
            </li>
            <li className="categoria-itens">
                <a href="#">
                    <span>Skin & Hair</span>
                </a>
            </li>
            <li className="categoria-itens">
                <a href="#">
                    <span>Vitality</span>
                </a>
            </li>
            <li className="categoria-itens">
                <a href="#">
                    <span>Digestion</span>
                </a>
            </li>
            <li className="categoria-itens">
                <a href="#">
                    <span>Immunity</span>
                </a>
            </li>
            <li className="categoria-itens">
                <a href="#">
                    <span>Peanutt Butter</span>
                </a>
            </li>
            </ul> 
            {/*Carrossel */}
            <Carrossel1/>
        </div>
        
    )
}