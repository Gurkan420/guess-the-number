function randomInt (n) {
    return Math.floor(Math.random() * 100)

}

let guesses = []
let secretNumber = randomInt()
console.log(secretNumber)
console.log(secretNumber)

function getUserGuess () {
    const stringValue = document.getElementById("user-input").value
    return parseInt(stringValue, 10)
}

let message = document.getElementById("message")

document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const guess = getUserGuess()
        setMessage (guess)
        console.log(guess)

    }


})

function setMessage (userGuess) {
    guesses.push(userGuess)
    document.getElementById("guesses").innerHTML = guesses
    if (userGuess > secretNumber) {
        message.innerHTML = "Too High!";
   
    }
    else if (userGuess < secretNumber) {
        message.innerHTML = "Too low!";
    
        
    }
    else { message.innerHTML = "correctGuess!"

 

    }
    clearValue()


}
function clearValue () {
    return document.getElementById('user-input').value = ''
}

 