function listOfColours(colours) {
  // Write your code here...
  let content=document.getElementById("content");
  let selection=document.createElement("select");
  let paragraph=document.createElement("p")
  content.appendChild(selection);
  content.appendChild(paragraph)
  for(let i=0;i<colours.length;i++){
   function createOption(){
      let option=document.createElement("option");
      option.innerHTML=colours[i]
      selection.appendChild(option);
       /* option.addEventListener("click", function () {
          paragraph.innerHTML ="red";
        });*/
        //Add events///////////////////////////////////////////////////////////////////////////////////////////////////
      
   }
   
   createOption();
  
  }
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
