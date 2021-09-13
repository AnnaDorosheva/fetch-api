// import newsService from "./api-news";
import template from "../templates/news.hbs";
import spinner from "./spinner";

//

// import template from "../templates/news.hbs";
// // 5586a16d91a8437d9271f83485961bc6

// // https://newsapi.org/v2/everything?q=bitcoin&apiKey=5586a16d91a8437d9271f83485961bc6

const baseURL = "https://newsapi.org/v2/";

const theme = "everything?q=bitcoin";

const root = document.querySelector("#root");

fetch(baseURL + theme, {
  headers: {
    Authorization: "5586a16d91a8437d9271f83485961bc6",
  },
})
  .then((arr) => {
    return arr.json();
  })
  .then((article) => {
    console.log(article);
    renderNews(article.articles, root, template);
  });

function renderNews(arrNevs, container, template) {
  const markup = arrNevs.map((item) => template(item)).join("");
  container.insertAdjacentHTML("beforeend", markup);
}
