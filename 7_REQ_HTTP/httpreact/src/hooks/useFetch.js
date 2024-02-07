import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  
  const [error, setError] = useState(null);

  //  5 - Refatorando post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const [path, setPath] = useState(null);

  //  6 - Loading
  const [loading, setLoading] = useState(false);

  const httpConfig = (data, method, path) => {

    if (method === "DELETE") {
      setPath(path);
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
      });
    }

    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data)
      });
    }

    setMethod(method);
  };


  useEffect(() => {
    const fetchData = async () => {
      
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();
  
        setData(json);
      }
      catch (error) {
        console.log(error.message);
        setError("Houve algum erro ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  //  5 - Refatorando o post
  useEffect(() => {
    const httpRequest = async () => {

      let json;

      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);
        json = await res.json();

      }

      else if (method === "DELETE") {
        let fetchOptions = [`${url}${path}`, config];

        const res = await fetch(...fetchOptions);
        json = await res.json();

      }

      setCallFetch(json);
    };

    httpRequest();
  }, [config, method, url, path]);


  return { data, httpConfig, loading, error };
};
