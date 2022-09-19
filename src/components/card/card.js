import React from 'react'
import './card.css'

export class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h3>Titulo</h3>
                <p>Esse é um texto do card</p>
            </div>
        );
    };
}