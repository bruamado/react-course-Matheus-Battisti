import './App.css'
import ManageData from './components/ManageData';

import City from './assets/city.jpg';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  const cars = [
    {id: 0, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 1, brand: "Porsch", color: "Vermelho", newCar: false, km: 5500},
    {id: 2, brand: "Honda", color: "Preto", newCar: false, km: 115000},
    {id: 3, brand: "Chevrolet", color: "Preto", newCar: false, km: 125000},
    {id: 4, brand: "Renault", color: "Verde", newCar: false, km: 92000}
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("Mensagem inicial");

  const pessoas = [
    {name: "Bruno Amado", age: 28, job: "Seller"},
    {name: "Caren Andrini", age: 31, job: "Seller"},
    {name: "Miguel Amado", age: 8, job: "Student"},
    {name: "Edna Maria Amado", age: 60, job: "Seller"},
]


  return (
    <div>
      <h1>Seção 3: Avançando em React!</h1>

      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* Props */}
      <ShowUserName name="Matheus"/>
      {/* Destruction */}
      <CarDetails brand="Volkswagen" km={100000} color="Azul" />
      {/* Reaproveitando */}
      <CarDetails brand="Chevrolet" km={50000} color="Preto" />
      <CarDetails brand="Honda" km={0} color="Branco" newCar={true}/>

      {/* Renderizando uma lista de carros através de um loop */ }
      {cars.map((car, index) => (
        <div key={car.id} style={{backgroundColor:'cyan'}}>
          <p>Este é um componente reutilizável. Index do looping: {index}</p>
          <CarDetails brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
        </div>
      ))}

      {/* Fragments */}
      <Fragment propFragment="Teste"/>

      {/* Renderizar elementos dentro de um component */}
      <Container value={Math.floor(Math.random()*100)}>
        <p>Este conteúdo será adicionado no Container!</p>
      </Container>
      <Container value={Math.floor(Math.random()*100)}>
        <h5>Este conteúdo será adicionado no Container!</h5>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* State lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={setMessage} />

      {/* Desafio 4: UserDetails */}
      {pessoas.map((pessoa, i) => (
        <UserDetails key={i} name={pessoa.name} age={pessoa.age} job={pessoa.job} bgColor={i%2 == 0 ? "yellow" : "cyan"}/>
      ))}

      <p>Fim do App.jsx</p>
    </div>
  )
}

export default App
