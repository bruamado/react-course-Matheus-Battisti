import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h2>Formulário em React</h2>
      <MyForm user={{name: "Josias", email: "josias@gmail.com", sex: "masculino", observacoes: "Josias é um cara muito legal!"}}/>
    </>
  )
}

export default App
