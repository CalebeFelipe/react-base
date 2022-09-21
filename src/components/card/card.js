import React, { Component } from 'react'
import './card.css'

export const Card = ({children, bgColor, color, showCardColor}) => {
    return (
        <div className='card' style={{backgroundColor: bgColor, color}} onClick={() => showCardColor(bgColor)}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    bgColor: 'orange',
    color: 'white'
}

// export class CardClasse extends Component {
//     render() {
//         return (
//             <div className="card">
//                 <h3>{this.props.title}</h3>
//                 <p>Esse é um texto do card</p>
//             </div>
//         );
//     };
// }