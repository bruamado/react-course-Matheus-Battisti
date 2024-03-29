import "./App.css";

import { useState, useEffect, useRef } from "react";

//  4 - Custom hook
import { useFetch } from "./hooks/useFetch";
const url = "http://localhost:3000/products";

const App = () => {
  const [products, setProducts] = useState([]);
  const deleteButtonRef = useRef(null);

  //  4 - Custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  /*   //  1 - Resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }
    fetchData();
  }, []); */

  // 2 - Inserindo dados
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    /* const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    //  3 - Carregamento dinâmico
    const addedProduct = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProduct]);
 */

    //  5 - Refatorando post
    httpConfig(product, "POST");
    clearForm();
  };

  const handleDelete = async (productToDelete) => {
    const path = "/" + productToDelete.id;
    httpConfig(null, "DELETE", path);
    alert("Produto deletado com sucesso!");
  };

  // Clear form
  const clearForm = () => {
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* Loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}
                <button
                  className="delete_item"
                  onClick={() => handleDelete(product)}
                >
                  Deletar
                </button>
              </li>
            ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            Preço:
            <input
              type="text"
              name="value"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>
          {!loading && <input type="submit" value="Criar" />}
          {loading && <input type="submit" value="Aguarde..." disabled />}
        </form>
      </div>
    </div>
  );
};
export default App;
