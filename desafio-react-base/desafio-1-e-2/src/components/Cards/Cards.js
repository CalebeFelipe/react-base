import { Card } from './Card/Card.js'

const cardInfo = [
    {
        title: 'Titulo do card 01',
        text: 'O paragrafo 01 do método map',
        id: 1
    },
    {
        title: 'Titulo do card 02',
        text: 'O paragrafo 02 do método map',
        id: 2
    },
    {
        title: 'Titulo do card 03',
        text: 'O paragrafo 03 do método map',
        id: 3
    }
]

export const Cards = ({title, color, text}) => {
    return (
        <div style={{color}}>
            <h1>{title.toUpperCase()}</h1>
            <p>{text}</p>

            {
                cardInfo.map((cardItem) => (
                    <Card key={cardItem.id}>
                        <h3>{cardItem.title}</h3>
                        <p>{cardItem.text}</p>
                    </Card>
                ))
            }

            <Card>
                <h3>Titulo do Card diferente</h3>
                <a href="#"><p>Parágrafo do card diferente</p></a>
                <button>Clique aqui</button>
            </Card>
        </div>
    )
};