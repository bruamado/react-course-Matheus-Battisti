const Container = ({children, value}) => {


  return (
    <div>
        <h2>Este é o título do container</h2>
        <h4>O conteúdo abaixo está vindo de fora do Container:</h4>
        {children}
        <p>Este valor também veio de fora: {value}</p>
    </div>
  )
}

export default Container