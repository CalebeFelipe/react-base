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

const showCardColor = (bgColor) => {
    console.log(bgColor)
}

export const Cards = () => {
    return (
        <div>
            <h2>Meus cards</h2>
            <div>
                {
                    cardInfo.map(card => (
                        <Card key={card.id} showCardColor={showCardColor}>
                            <h3>{card.title}</h3>
                            <p>Esse é um texto do card</p>
                        </Card>
                    ))
                }

                        <Card bgColor='blue' showCardColor={showCardColor}>
                            <h3>Titulo do card 44</h3>
                            <p>Esse é um texto do card</p>
                        </Card>
            </div>
        </div>
    )
}