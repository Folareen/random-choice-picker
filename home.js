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

    listOfChoices.forEach((choice) => {
        unhighlight(choice)
    })

    let randomPick = setInterval(
        () => {
            let random = Math.floor(Math.random() * listOfChoices.length);
            let choosen = listOfChoices[random];

            setTimeout (
                () =>{
                    highlight(choosen);

                    setTimeout(
                        () => {
                            unhighlight(choosen);
                        }, 100
                        
                    )

                }, 0000
            );
            
        }, 100
    );

    setTimeout(
        () =>{
            clearInterval(randomPick);
            
            setTimeout(
                () => {
                    let random = Math.floor(Math.random() * listOfChoices.length);
                    let choosen = listOfChoices[random];
                    highlight(choosen);
                }, 0
            )
        }, 500 * listOfChoices.length
    )

}

function highlight(item){
    item.classList.add("highlight");
}

function unhighlight(item){
    item.classList.remove("highlight");
}