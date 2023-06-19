import { useState, useEffect } from "react";

export function useFetch(url) {

  const [datos, setdatos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((datos) => setdatos(datos))
      .finally(() => setLoading(false));
  }, []);
  return { datos, loading };
}

