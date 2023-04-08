export default async function deleteItemsAndCategories() {
    const itemsResponse = await fetch('http://localhost:3001/items');
  const items = await itemsResponse.json();

  const categoriesResponse = await fetch('http://localhost:3001/categories');
  const categories = await categoriesResponse.json();

  const deleteItemPromises = items.map((item) => {
    return fetch(`http://localhost:3001/items/${item.id}`, {
      method: "DELETE"
    });
  });

  const deleteCategoryPromises = categories.map((category) => {
    return fetch(`http://localhost:3001/categories/${category.id}`, {
      method: "DELETE"
    });
  });

  await Promise.all([...deleteItemPromises, ...deleteCategoryPromises]);
}