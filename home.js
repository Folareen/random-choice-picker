const TEXTBOX = document.querySelector("#textbox");
const CHOICES = document.querySelector(".choices")
const PICK_BUTTON = document.querySelector('.pick-button');

TEXTBOX.addEventListener('keyup', event => splitChoices(event.target.value))

function splitChoices(value){
    CHOICES.innerHTML = "";

    let listOfChoices = value.split(",").filter(choice => choice.trim() !== "").map(choice => choice.trim());
    listOfChoices.forEach(choice => createChoice(choice))
}
function createChoice(choice){
    let choiceEl = document.createElement('div');
    choiceEl.classList.add("choice");
    choiceEl.innerText = choice;
    CHOICES.appendChild(choiceEl);
}
