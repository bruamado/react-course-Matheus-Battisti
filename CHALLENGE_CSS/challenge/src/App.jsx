import './App.css'
import ShowCars from './components/ShowCars'

function App() {

  const carList = [
    {model: "Cruze", brand: "Chevrolet", color: "Preto"},
    {model: "Gol", brand: "Volkswagen", color: "Cinza"},
    {model: "Duster", brand: "Renault", color: "Branco"},
    {model: "Frontier", brand: "Nissan", color: "Branco"}
  ]
  return (
    <>
      <h1>Exibir lista de carros:</h1>
      <p>Este título foi estilizado no App.css</p>
      <ShowCars carList={carList} />
    </>
  )
}

export default App
