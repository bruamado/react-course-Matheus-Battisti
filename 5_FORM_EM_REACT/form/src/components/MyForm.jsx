import { useState } from 'react';
import './MyForm.css';

const MyForm = ({user}) => {

    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [sex, setSex] = useState(user? user.sex : "");
    const [observacoes, setObservacoes] = useState(user ? user.observacoes : "");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário!");
        console.log("Objeto enviado: ");
        console.log({name: name, email: email, sex: sex, observacoes: observacoes});
        clearForm();
    };

    const clearForm = () => {
        setName('');
        setEmail('');
    };

  return (
    <div>

        {/* 1 - criacao de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder='Digite o seu nome' 
                    onChange={handleName}
                    value={name}
                />
            </div>
            {/* Label envolvendo input */}

            <label>
                <span>E-mail</span>
            {/* Simplificação de manipulação de state */}
                <input 
                    type="text" 
                    name="email" 
                    placeholder='Digite o seu e-mail' 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    />
            </label>

            {/* textarea */}
            <label>
                <span>Observações</span>
                <textarea 
                    name="obs" 
                    cols="30" 
                    rows="4" 
                    placeholder='Insira aqui as observações' 
                    onChange={(e) => setObservacoes(e.target.value)}
                    value={observacoes}
                />
            </label>

            {/* Select */}
            <label >
                <span>Sexo</span>
                <select name="sex" onChange={(e) => {setSex(e.target.value)}}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
export default MyForm