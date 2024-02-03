const UserDetails = ({name, age, job, bgColor}) => {
    const style = {
        backgroundColor: bgColor
    }
  return (
    <>
        <p>Teste!</p>
        <p style={style}>Nome: {name}, Idade: {age}, Profissão: {job}</p>
        {age >= 18 && <p>Esta pessoa pode tirar habilitação!</p>}
    </>
  )
}

export default UserDetails