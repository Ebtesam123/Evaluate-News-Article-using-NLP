import "../styles/style.scss";
const { checkValidURL } = require("./checkURL");

export const SubmitHandler = async (e) => {
  e.preventDefault();
  try {
    let url = document.getElementById("article-url").value;
    let body = { url: url };
    if (checkValidURL(url)) {
      let res = await fetch("http://localhost:8081/NLP", {
        method: "POST",
        credentials: "same-origin",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      //console.log(res);
      const post = await res.json();
      console.log("post", post);
      document.getElementById("Results").className = "show";

      document.getElementById(
        "text"
      ).innerHTML = `Text=${post.sentence_list[0].text}`;
      document.getElementById(
        "agreement"
      ).innerHTML = `Agreement = ${post.agreement}`;
      document.getElementById(
        "subjectivity"
      ).innerHTML = `Subjectivity=${post.subjectivity}`;
      document.getElementById(
        "confidence"
      ).innerHTML = `Confidence=${post.confidence}`;
      document.getElementById("irony").innerHTML = `Irony= ${post.irony}`;
      document.getElementById(
        "score_tag"
      ).innerHTML = `Score Tag= ${post.score_tag}`;
    } else {
      document.getElementById("Results").className = "hidden";
      console.log("invalid url");
      alert("Invalid URL! try again.");
    }
  } catch (error) {
    alert("error in handling the submit");
  }
};
