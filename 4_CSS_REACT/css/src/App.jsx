import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {

  const n = 15;

  const redTitle = true;

  return (
    <>
      {/* CSS Global */}
      <h1>REACT com CSS</h1>

      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>
      
      {/* Inline CSS */}
      <p style={{color: "blue", backgroundColor: "cyan"}}>
        Este elemento foi estilizado de forma inline
      </p>

      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>
        CSS dinâmico
      </h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      {/* CSS Modules */}
      <Title />
    </>
  )
}

export default App
