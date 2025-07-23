export const fetchProducts = async (categoryId: number) => {
  const response = await fetch(`https://localhost:7190/api/products?categoryId=${categoryId}`);
  return await response.json();
};