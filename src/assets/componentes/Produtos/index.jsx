import { useState, useEffect } from 'react';
import Carrossel2 from './carrossel';

export default function Produtos () {
    return(
        <div className="categorias-container">
        <div className="title-wrapper">
        <span className="vertical-bar">|</span> 
        <h1>New Launched Products</h1>
        </div>
            {/*Carrossel */}
            <Carrossel2/>
        </div>
        
    )
}