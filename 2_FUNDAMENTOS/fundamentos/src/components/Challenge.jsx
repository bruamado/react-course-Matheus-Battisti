const Challenge = () => {
    let x = 5;
    let y = 15;

    function sum(x, y){
        return alert(x+y);
    }

    return (
        <div>
            <p>Valor de X: {x}</p>
            <p>Valor de y: {y}</p>
            <button onClick={()=>{sum(x, y)}}>Somar x+y</button>
        </div>
    )
}

export default Challenge;