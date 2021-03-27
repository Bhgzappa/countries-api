import { useState, useEffect } from "react";
function useCountries(url) {
  const [countries, setCountries] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCountry = async () => {
      const data = await fetch(url)
        .then((res) => res.json())
        .catch((err) => setError(err));
      setCountries(data);
      setIsPending(false);
    };
    fetchCountry();
  }, [url]);
  return {
    countries,
    isPending,
    error,
  };
}

export default useCountries;
