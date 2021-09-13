// const baseUrl = "https://newsapi.org/v2/everything";
const baseUrl =
  "https://newsdata.io/api/1/news?apikey=pub_1165beaa4ce55554caca54070de07b96a86f&language=en";
// const key = "&apiKey=5586a16d91a8437d9271f83485961bc6";

// pub_1165beaa4ce55554caca54070de07b96a86f

export default {
  page: 1,
  query: "",
  feachArticles() {
    const options = {
      headers: {
        // Authorization: "5586a16d91a8437d9271f83485961bc6",
        Accept: "application/json",
        mode: "no-cors",
      },
    };

    const params = `&q=${this.query}&page=${this.page}`;

    return fetch(baseUrl + params, options).then((response) => {
      this.inctementPage();
      return response.json();
    });
  },
  searchQuery(text) {
    this.query = text;
  },
  inctementPage() {
    this.page += 1;
  },
  resePage() {
    this.page = 1;
  },
};
