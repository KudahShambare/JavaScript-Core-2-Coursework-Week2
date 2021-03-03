function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  for(let i=0;i<arrayOfPeople.length;i++){
   let textName= document.createElement("h1");
   textName.innerHTML=arrayOfPeople[i].name;
   content.appendChild(textName)
   let textJob=document.createElement("h2");
   textJob.innerHTML=arrayOfPeople[i].job;
   content.appendChild(textJob)
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
