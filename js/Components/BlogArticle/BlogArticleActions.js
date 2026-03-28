export function getBlogArticleById(id) {
  const articles = JSON.parse(localStorage.getItem("blogArticles")) || [];
  return articles.find((a) => a.id == id);
}
