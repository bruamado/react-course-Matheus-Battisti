import { createContext } from "react";
import "./App.css";
import { Category } from "./components/Category";

import Destructuring from "./components/Destructuring";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";
import Context from "./components/Context";

// Type
type textOrNull = string | null;

//  Context
type IAppContext = {
  language: string;
  framework: string;
  projects: number;
};

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  //  1 - Variáveis
  const name: string = "Bruno Amado";
  const age: number = 30;
  const isWorking: boolean = true;

  //  2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  mySecondText = "Opa";

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <>
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está trabalhando!</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name={"Segundo"} />
        <Destructuring
          title="Primeiro Post"
          content="Algum conteúdo"
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <State />
        {myText && <p> Tem texto na variável</p>}
        {mySecondText && <p> Tem texto na variável</p>}
        <Context />
      </>
    </AppContext.Provider>
  );
}

export default App;
