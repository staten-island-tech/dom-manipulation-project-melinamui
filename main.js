const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};

const ForCards = [
  {
    genre: "Romance",
    gender: "Male",
    hotness: "Really Hot",
  },
];

/*const img = document.createElement("img");
img.src = "uzui.jpg";
document.body.appendChild(img);*/

if (ForCards === ["Romance", "Male", "Really Hot"]) {
  img.addEventListener("click", function () {
    console.log("clicked");
  });
}

DOMSelectors.box.insertAdjacentHTML(
  "beforebegin",
  `<p class = "name">For DOM Manipulation Project<p>`
);
// insertAdjacentHTML will allow you to add HTML elements into your project through the JS. The positioning of this is relative to other DOM elements, and can be positioned around them. This positioning can be done with "beforebegin", "afterbegin", "beforeend", and "afterend".

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value; // .value lets you get the values of an element, in this case something you typed in

  console.log(input);

  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `
          <p class = 'extra-text'>${input}</p>
      `
  );
}); // this function will cause new HTML to be added when the input button is clicked.

DOMSelectors.button.insertAdjacentHTML(
  "afterend",
  `<p class="info">All you have to do is type and click :D<p>
    <img src="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg" class="pika"></img>`
);

// you can put multiple HTML tags in the same DOMSelector as if you were writing out regular HTML, you're also able to assigned classes and ids that can be used for styling the elements you add through js.

//anime thing, "You dont get to chose cuz this ISNT a few country :)"
