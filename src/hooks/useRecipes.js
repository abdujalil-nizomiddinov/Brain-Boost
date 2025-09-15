import { useEffect, useState } from "react";

export function useRecipes({ prepMinutes, cookMinutes, search, limit } = {}) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const url = new URL("https://json-api.uz/api/project/recipes/recipes");
    if (prepMinutes) url.searchParams.append("prepMinutes", prepMinutes);
    if (cookMinutes) url.searchParams.append("cookMinutes", cookMinutes);
    if (search) url.searchParams.append("slug", search);
    if (limit) url.searchParams.append("limit", limit);

    fetch(url)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [prepMinutes, cookMinutes, search, limit]);

  return { recipes, loading, error };
}
