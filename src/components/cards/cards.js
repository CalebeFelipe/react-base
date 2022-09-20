import { Card } from '../card/card.js'

export const Cards = () => {
    return (
        <div>
            <h2>Meus cards</h2>
            <div>
                <Card>
                    <h3>Titulo do card 1</h3>
                    <p>Esse é um texto do card</p>
                    <p>Lorem ipsum</p>
                </Card>
                <Card>
                    <h3>Titulo do card 2</h3>
                    <p>Esse é um texto do card</p>
                    <a>Clique aqui</a>
                </Card>
                <Card>
                    <h3>Titulo do card 3</h3>
                    <p>Esse é um texto do card</p>
                    <button>Enviar</button>
                </Card>
            </div>
        </div>
    )
}