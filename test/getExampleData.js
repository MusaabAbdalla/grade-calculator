export default async function getExampleData(limit = 10) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=" + limit,
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Unable to fetch date");
  }
}
