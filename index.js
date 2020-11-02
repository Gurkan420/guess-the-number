function randomInt (n) {
    return Math.floor(Math.random() * 100)

}


const secretNumber = randomInt()
console.log(secretNumber)
console.log(secretNumber)

function getUserGuess () {
    const stringValue = document.getElementById("userInput").value
    return parseInt(stringValue, 10)
}

document.addEventListener("keyUp", function (event) {
    if (event.key === "enter") {
        const guess = getGuess()
    }


})

function setMessage (userGuess) {
    if (userGuess > secretNumber) {
        message.innerHTML = "Too High!";
   
    }
    else if (userGuess < secretNumber) {
        message.innerHTML = "Too low!";
    
        
    }
    else { message.innerHTML = "correctGuess!"


    }
clearInput();


}