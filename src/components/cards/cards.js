import { Card } from '../card/card.js'

let idCounter = 1
const cardInfo = [
    {
        title: 'Titulo do card 11', 
        id: idCounter++
    }, 
    {
        title: 'Titulo do card 22', 
        id: idCounter++
    },
    {
        title: 'Titulo do card 33', 
        id: idCounter++
    }
]

export const Cards = () => {
    return (
        <div>
            <h2>Meus cards</h2>
            <div>
                {
                    cardInfo.map(card => (
                        <Card key={card.id}>
                            <h3>{card.title}</h3>
                            <p>Esse é um texto do card</p>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}