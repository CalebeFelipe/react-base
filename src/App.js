import './App.css';
import { Button } from './components/button/button.js';
import { Card } from './components/card/card.js'

function App() {
  return (
    <>
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
      <Button label="Baixar CV"/>
      <Button />
    </>
  );
};

export default App;
