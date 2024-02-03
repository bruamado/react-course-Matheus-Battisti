import {useState} from 'react';

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name, setName] = useState("João");

    const trocaNome = () => {
        if (name === "João") {
            return setName("Joãozinho");
        }
        else {
            return setName("João");
        }
    }
    
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Se x for false, imprimir.</p>}

        {name === "João" ? <p>O nome é João!</p> : <p>O nome não é João, ele é {name}</p>}
        <button onClick={trocaNome}>Trocar o nome!</button>
    </div>
  )
}

export default ConditionalRender