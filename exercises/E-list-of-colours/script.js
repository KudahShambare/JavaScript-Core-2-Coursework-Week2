function listOfColours(colours) {
  // Write your code here...
  let content = document.getElementById("content");
  content.style.fontSize = "30px";
  let selection = document.createElement("select");
  selection.style.fontSize = "25px";
  let paragraph = document.createElement("p");
  paragraph.innerHTML = "You have selected: ";
  content.appendChild(paragraph);
  content.appendChild(selection);

  for (let i = 0; i < colours.length; i++) {
    function createOption() {
      let option = document.createElement("option");
      option.innerHTML = colours[i];
      option.value = colours[i];

      selection.appendChild(option);
    }
    createOption();
  }
  selection.addEventListener("change", function () {
    paragraph.innerHTML = "You have selected: " + this.value;
    paragraph.style.color = this.value;
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
