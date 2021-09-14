const baseUrl = "https://newsapi.org/v2/everything?";
// const key = "apiKey=5586a16d91a8437d9271f83485961bc6";

export default {
  page: 1,
  query: "",
  feachArticles() {
    const options = {
      headers: {
        Authorization: "5586a16d91a8437d9271f83485961bc6",
      },
    };
    const params = `q=${this.query}&page=${this.page}&pageSize=3`;

    return fetch(baseUrl + params, options).then((response) => {
      this.inctementPage();
      return response.json();
    });
  },
  searchQuery(text) {
    this.query = `${text}`;
  },
  inctementPage() {
    this.page += 1;
  },
  resePage() {
    this.page = 1;
  },
};
