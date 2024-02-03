import { useState } from "react"

const ListRender = () => {

    const [users, setUsers] = useState([
            {id: 0, name: "Matheus"}, 
            {id: 1, name: "Pedro"},
            {id: 2, name: "Josias"}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        console.log(randomNumber);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };


  return (
    <div>
        <ul>
            {users.map((user) => (
                <li key={user.id} id={user.id}>{user.name}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar item aleatório</button>
    </div>
  )
}

export default ListRender