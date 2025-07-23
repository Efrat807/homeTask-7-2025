export const fetchCategories = async () => {
  const response = await fetch('https://localhost:7190/api/categories');
  return await response.json();
};
