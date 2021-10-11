// Create global variables
const guessedLettersElement = document.querySelector(".guessed-letters"); // Unordered list where the player’s guessed letters will appear.
const button = document.querySelector(".guess"); // The button with the text “Guess!” in it. 
const letterInput = document.querySelector(".letter"); // The text input where the player will guess a letter.
const wordInProgress = document.querySelector(".word-in-progress"); // The empty paragraph where the word in progress will appear.
const remainingGuesses = document.querySelector(".remaining"); // The paragraph where the remaining guesses will display.
const spanRemainingGuesses = document.querySelector (".remaining span"); // Span inside the paragraph where the remaining guesses will display.
const playerGuessedLetter = document.querySelector (".message"); // Empty paragraph where messages will appear when the player guesses a letter.
const hiddenButton = document.querySelector (".play-again"); // The hidden button that will appear prompting the player to play again.

// Create another global variable called word and give it the value of "magnolia". Magnolia is your starting word to test out the game until you fetch words from a hosted file in a later step.
const word = "magnolia";

// create another global variable called guessedLetters with an empty array. This array will contain all the letters the player guesses. 
const guessedLetters = [];

// Create and name a function to update the paragraph’s innerText for the “words-in-progress” element with circle symbols (●) to represent each letter in the word. The symbols will stay on the screen until the correct letter is guessed (in a future step). Hint: Copy and paste the ● symbol into your code!
const placeholderWord = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
// Call the function and pass it the word variable as the argument. You should see 8 circle symbols on the screen, one for each letter in the word “magnolia.” Hint: You’ll need to use an array and then join it back to a string using the .join("") method.
wordInProgress.innerText = placeholderLetters.join("");
};

placeholderWord(word);

// Add an event listener for when a player clicks the Guess button. In the callback function, add a parameter for the event: e.
// Because you’re working with a form, you want to prevent the default behavior of clicking a button, the form submitting, and then reloading the page. To prevent this reloading behavior, add this line of code at the top of the callback function: e.preventDefault();.
button.addEventListener("click", function (e) {
    e.preventDefault();
// Inside the event handler function for the Guess button, empty the text of the message element.
playerGuessedLetter.innerText = "";
// Create and name a variable to capture the value of the input. Log out the value of the variable capturing the input. Then, empty the value of the input. You should see the letter you enter into the input field in the console when the Guess button is clicked. 
const guessValue = letterInput.value;
// console.log(guessValue);

// At the bottom of the event handler, call the function you made that checks the input, and pass it the input value as an argument. Save the result of this function call to a variable and log it out to the console.
const rightGuess = validateInput(guessValue);
// console.log(rightGuess);

// Return to the event handler for the Guess button. Make sure that the variable mapped to the result of the function validates that the player’s input is returning a letter (as opposed to “undefined”). If it’s returning a letter, pass it as an argument to your makeGuess function.
    if (rightGuess) {
        makeGuess(guessValue);
    } 
    letterInput.value = "";
});

// Create and name a function that accepts the input value as a parameter. This function’s purpose is to validate the player’s input.
// Inside the function, create a variable for the accepted letter sequence: const acceptedLetter = /[a-zA-Z]/. Now your code uses a regular expression to ensure the player inputs a letter! Still inside the function, use a conditional block to check for different scenarios. First, check if the input is empty. Then, check if the player has entered more than one letter. Finally, check if they’ve entered a character that doesn’t match the regular expression pattern. Hint: You’ll need the .match() method here. Each condition should have a message directing the player on what to input. 
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Only enter 1 letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    } 
};

// Below the function that checks input, create a new function called makeGuess that accepts a letter as the parameter. 
// JavaScript is case sensitive, so it sees uppercase and lowercase letters as different characters. The easiest way to handle case-sensitivity is to convert all letters to one casing. We recommend converting your letter parameter to uppercase. Once the letter transforms to uppercase, check to see if your guessedLetters array already contains that letter.
const makeGuess = function (guessValue) {
    guessValue = guessValue.toUpperCase();
// If the player already guessed the same letter, update the message to inform the player they’ve already guessed that letter and try again. If they haven’t guessed that letter before, add the letter to the guessedLetters array.
if (guessedLetters.includes(guessValue)) {
    message.innerText = "You've already guessed that letter.";
} else {
    guessedLetters.push(guessValue);
    // Log out the guessedLetters array to the console.
    console.log(guessedLetters);
// Call the function inside the else statement of the makeGuess function so the letter displays when it hasn’t been guessed before.
    playerGuesses();
    updateWordInProgress(guessedLetters);
  }
};

// Create and name a function to update the page with the letters the player guesses. Empty the innerHTML of the unordered list where the player’s guessed letters will display. Create a new list item for each letter inside your guessedLetters array (i.e., the global variable) and add it to the unordered list. 
const playerGuesses = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

// Create and name a function to update the word in progress that accepts the guessedLetters array as a parameter. This function will replace the circle symbols with the correct letters guessed. Create a variable called wordUpper to change the word variable to uppercase. On the following line, create a variable to split the word string into an array so that the letter can appear in the guessedLetters array: const wordArray = wordUpper.split("");. Then, log out wordArray to see what this does!
const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
        revealWord.push(letter.toUpperCase());
    } else {
        revealWord.push("●");
    }
  }
 //console.log(revealWord); 
    wordInProgress.innerText = revealWord.join("");
    didPlayerWin();
};

// Create and name a function to check if the player successfully guessed the word and won the game. Begin by verifying if their word in progress matches the word they should guess. If the player has won, add the “win” class to the empty paragraph where messages appear when they guess the letter. Also, update the paragraph’s contents to: <p class="highlight">You guessed correct the word! Congrats!</p>.
const didPlayerWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight>You guessed the correct word! YEAH! </p>`;
    }
};