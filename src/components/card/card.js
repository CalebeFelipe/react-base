import React from 'react'
import './card.css'

export const Card = ({children}) => {
    return (
        <div className='card'>
            {children}
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