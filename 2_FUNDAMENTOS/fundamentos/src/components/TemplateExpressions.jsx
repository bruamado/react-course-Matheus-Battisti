const TemplateExpressions = () => {
    const name = "Matheus"
    const data = {
        age: 31,
        job: "Programmer",
    }

    return (
        <>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como {data.job} e tem {data.age} anos.</p>
            <p>{4 + 4}</p>
            {console.log("JSX React")}
        </>
    )
}

export default TemplateExpressions