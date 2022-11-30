const DOMSelectors = {
  container: document.getElementById("container"),
  form: document.getElementById("form"),
  button: document.getElementById("btn"),
  display: document.getElementById("display"),
  inputs: document.getElementById("inputs"),
  anime: document.getElementById("anime"),
  creator: document.getElementById("creator"),
  cover: document.getElementById("cover"),
};
console.log(DOMSelectors);

DOMSelectors.form.addEventListener("submit", function (box) {
  cards();
  box.preventDefault();
});

function cards() {
  let anime = DOMSelectors.anime.value;
  let creator = DOMSelectors.creator.value;
  let cover = DOMSelectors.cover.value;
  injectAnime(anime, creator, cover);
  clearFields();
  removeButtons();
}
function removeButtons() {
  let remove = document.querySelectorAll("#remove");
  remove.forEach((card) => {
    card.addEventListener("click", function (event) {
      event.target.parentElement.remove();
    });
  });
}
const clearFields = function () {
  DOMSelectors.anime.value = "";
  DOMSelectors.creator.value = "";
  DOMSelectors.cover.value = "";
};
const injectAnime = function (anime, creator, cover) {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `
    <div id = "display">
    <div id = "card">
        <p id="card-text"> ${anime}</p>
        <p id="card-text"> ${creator}</p>
        <img id="cover" src="${cover}"/>
        <button id="remove"> Remove </button>
    </div>
    </div>
      `
  );
};
