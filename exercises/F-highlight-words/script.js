function highlightWords(paragraph, colours) {
  // Write your code here...
  let content = document.getElementById("content");
  content.style.fontSize = "25px";
  let paragraphElement = document.createElement("p");
  let selection = document.createElement("select");
  selection.style.fontSize = "25px";
  content.appendChild(paragraphElement);
  content.appendChild(selection);
  let paragraphArray = paragraph.split(" ");
  for (let j = 0; j < colours.length; j++) {
    function createOption() {
      let option = document.createElement("option");
      option.innerHTML = colours[j];
      selection.appendChild(option);
    }
    createOption();
  }
  for (let i = 0; i < paragraphArray.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = paragraphArray[i] + " ";
    paragraphElement.appendChild(span);
    span.addEventListener("click", function () {
      span.style.backgroundColor = selection.value;
    });
  }
}
// Add Events///////////////////////////////////////////////////////////////////////////////////
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
