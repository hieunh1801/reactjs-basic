const baseUrl = "  http://localhost:5000/user";

export const getUsers = async () => {
  const result = await fetch(baseUrl).then((res) => res.json);
  return result;
};
