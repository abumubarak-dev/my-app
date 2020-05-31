import React from 'react';
import './card.style.css';


export const Card = props => (
    <div className='card-container'>

    <h1> { props.fruit.name} </h1>
    <p>{props.fruit.name}</p>
    <p>{props.fruit.email}</p>
    </div>
)