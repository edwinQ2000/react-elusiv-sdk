import { useState, useEffect } from "react";

export function useFetch(url) {

  const [datos, setdatos] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((datos) => setdatos(datos));
  }, []);
  return datos;
}

