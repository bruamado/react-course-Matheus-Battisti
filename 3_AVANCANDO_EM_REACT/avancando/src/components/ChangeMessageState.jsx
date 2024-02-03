const ChangeMessageState = ({handleMessage}) => {

    const messages = ["Oi", "Olá", "Oi, tudo bem?"];

    const changeMessage = () => {
        let random = Math.floor(Math.random() * 3);
        console.log(random);
        return handleMessage(messages[random]);
    }

  return (
    <div>
        <button onClick={changeMessage}>Trocar mensagem</button>
    </div>
  )
}

export default ChangeMessageState 