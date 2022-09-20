import React from 'react'
import './card.css'

export const Card = ({title}) => {
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>Este é um parágrafo</p>
        </div>
    )
}

// export class Card extends React.Component {
//     render() {
//         return (
//             <div className="card">
//                 <h3>{this.props.title}</h3>
//                 <p>Esse é um texto do card</p>
//             </div>
//         );
//     };
// }