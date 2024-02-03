import { useState } from "react";

const ManageData = () => {
    
    //Styles
    const bgYellow = {
        backgroundColor: "yellow",
        padding: "20px"
    };
    
    const bgCyan = {
        backgroundColor: "cyan",
        padding: "20px"
    }

    //Variables
    let someData = 10;
    let [value, setValue] = useState(10);

    return (
    <>
    <div style={bgYellow}>
        <h3>Sem useState:</h3>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData += 5)}>Tentar incrementar 5</button>
    </div>
    <div style={bgCyan}>
        <h3>Com useState:</h3>
        <p>Valor: {value}</p>
        <button onClick={() => (setValue(value += 5))}>Incrementar 5</button>
    </div>
    </>
  )
}

export default ManageData