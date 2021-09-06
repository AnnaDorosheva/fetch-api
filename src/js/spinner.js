const spinner = document.querySelector("#loader");
export default {
  show() {
    spinner.classList.remove("background-loader-hidden");
  },
  hide() {
    spinner.classList.add("background-loader-hidden");
  },
};
