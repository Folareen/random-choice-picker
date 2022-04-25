const TEXTBOX = document.querySelector("#textbox");
const CHOICES = document.querySelector(".choices");
const PICK_BUTTON = document.querySelector('.pick-button');

TEXTBOX.addEventListener('keyup', event => {
    splitChoices(event.target.value);

    if(event.key === "Enter"){
        pick();
    }
});
PICK_BUTTON.addEventListener('click', pick);

function splitChoices(value){
    CHOICES.innerHTML = "";

    let listOfChoices = value.split(",")
        .filter(choice => choice.trim() !== "")
        .map(choice => choice.trim());
    listOfChoices.forEach(choice => createChoice(choice));
}
function createChoice(choice){
    let choiceEl = document.createElement('div');
    choiceEl.classList.add("choice");
    choiceEl.innerText = choice;
    CHOICES.appendChild(choiceEl);
}

function pick(){
    TEXTBOX.value = "";
    let listOfChoices = document.querySelectorAll(".choice");

    let counter = 0;
    let randomDuration = listOfChoices.length * 5;
    if ( counter == randomDuration){
        clearInterval(randomPick)
    }

    let randomPick = setInterval(
        () => {
            counter += 1;
            let random = Math.floor(Math.random() * listOfChoices.length);
            let choosen = listOfChoices[random];
            setTimeout (
                () =>{
                    highlight(choosen);

                    setTimeout(
                        () => {
                            unhighlight(choosen)
                        }, 100
                        
                    )
                    if (counter < randomDuration){
                        
                    }


                }, 0000
            )
        }, 100
    )

}

function highlight(curr){
    curr.classList.add("highlight");
}

function unhighlight(curr){
    curr.classList.remove("highlight");
}