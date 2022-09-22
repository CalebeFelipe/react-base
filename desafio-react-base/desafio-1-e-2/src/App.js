import { Cards } from './components/Cards/Cards.js'
import { Card } from './components/Cards/Card/Card.js'
import { Button } from './components/Button/Button.js';

function App() {
  return (
    <>
      <Cards color="orange" title="Este aqui é o título maiusculo" text="Este aqui é o parágrafo de cor duvidosa e blablablablabla" >
        
      </Cards>

      <Button label="Baixar CV" bgColor="blue" color="white">
      </Button>
    </>
  );
}

export default App;
