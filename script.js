const buttonElement = document.getElementById("clickButton")
const background = document.getElementById("html")

const characterList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
const randomFunctions = [changeColour, generateNumber, generateletter]

let buttonSection = document.querySelector(".buttonSection")

function buttonPressed() {
    randomFunctions[Math.floor(Math.random() * (randomFunctions.length))]()
    randomSounds()
}

function changeColour() {
    let hexadecimalColour = ""
    let hexadecimalLetter = ''
    const hashSymbol = '#'

    for (let i = 0; i < 6; i++) {
        hexadecimalLetter = characterList[Math.floor(Math.random() * (characterList.length))]

        hexadecimalColour += hexadecimalLetter
    }
    background.style.backgroundColor = hashSymbol + hexadecimalColour
}

function generateNumber() {
    let number = Math.floor(Math.random() * 10)
    let numberElement = document.getElementById("number")

    if (numberElement === null) {
    numberElement = document.createElement("p")
    numberElement.id = "number"
    numberElement.style.fontFamily = 'Times New Roman'
    numberElement.style.fontSize = "80pt"
    buttonSection.appendChild(numberElement)
    }

    numberElement.textContent = number
}

function generateletter() {
    let number = Math.floor(Math.random() * (91 - 65) + 65)
    let letterElement = document.getElementById("number")
    let letter = String.fromCharCode(number)

    if (letterElement === null) {
    letterElement = document.createElement("p")
    buttonSection = document.querySelector(".buttonSection")
    letterElement.id = "letter"
    letterElement.style.fontFamily = 'Times New Roman'
    letterElement.style.fontSize = "80pt"
    buttonSection.appendChild(letterElement)
    }

    letterElement.textContent = letter
}