import { useCallback, useEffect, useState } from "react";

// Charge des données et expose loading / error / reload.
export default function useFetch(fn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const reload = useCallback(() => {
    setLoading(true);
    fn()
      .then((d) => { setData(d); setError(""); })
      .catch(() => setError("Chargement impossible. Réessayez dans un instant."))
      .finally(() => setLoading(false));
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { reload(); }, [reload]);
  return { data, loading, error, reload };
}
