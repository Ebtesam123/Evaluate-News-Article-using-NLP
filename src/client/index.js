import "./styles/style.scss";
const { SubmitHandler } = require("./js/handleSubmit");

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("submit");
  btn.addEventListener("click", SubmitHandler);
});

export default SubmitHandler;
