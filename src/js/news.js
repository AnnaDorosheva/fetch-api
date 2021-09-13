import newsService from "./api-news";
import template from "../templates/news.hbs";
import spinner from "./spinner";

const refs = {
  searchForm: document.querySelector("#search-form"),
  articleList: document.querySelector("#article-list"),
  submitBtn: document.querySelector(".load-more"),
};

refs.searchForm.addEventListener("submit", searchFormSubmitHandler);
refs.submitBtn.addEventListener("click", loadMoreHandler);

// Searching articles
function searchFormSubmitHandler(event) {
  event.preventDefault();

  const inputValue = event.target.elements.text.value;
  newsService.searchQuery(inputValue);
  clearlistArticles();
  newsService.resePage();
  featchArticleList();
}
// Load more klick
function loadMoreHandler() {
  featchArticleList();
}

// Feach function
function featchArticleList() {
  spinner.show();
  newsService
    .feachArticles()
    .then((data) => {
      spinner.hide();
      console.log(data);
      const markup = buildListMarckupItems(data.results);
      appendArticlesToSite(markup);
    })
    .catch((error) => console.warn(error));
}
function appendArticlesToSite(markup) {
  refs.articleList.insertAdjacentHTML("beforeEnd", markup);
}
function buildListMarckupItems(articles) {
  return template(articles);
}

function clearlistArticles() {
  refs.articleList.innerHTML = "";
}
// import template from "../templates/news.hbs";
// // 5586a16d91a8437d9271f83485961bc6

// // https://newsapi.org/v2/everything?q=bitcoin&apiKey=5586a16d91a8437d9271f83485961bc6

// const baseURL = "https://newsapi.org/v2/";

// const theme = "everything?q=bitcoin";

// const key = "&apiKey=";

// const root = document.querySelector("#root");

// fetch(baseURL + theme, {
//   headers: {
//     Authorization: "5586a16d91a8437d9271f83485961bc6",
//   },
// })
//   .then((arr) => {
//     return arr.json();
//   })
//   .then((article) => {
//     console.log(article);
//     renderNews(article.articles, root, template);
//   });

// function renderNews(arrNevs, container, template) {
//   const markup = arrNevs.map((item) => template(item)).join("");
//   container.insertAdjacentHTML("beforeend", markup);
// }
