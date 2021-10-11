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
        placeholderLetters.push = "●";
    }
// Call the function and pass it the word variable as the argument. You should see 8 circle symbols on the screen, one for each letter in the word “magnolia.” Hint: You’ll need to use an array and then join it back to a string using the .join("") method.
wordsInProgressText.innerText = placeholderLetters.join("");
};

placeholderWord(word);

// Add an event listener for when a player clicks the Guess button. In the callback function, add a parameter for the event: e.
// Because you’re working with a form, you want to prevent the default behavior of clicking a button, the form submitting, and then reloading the page. To prevent this reloading behavior, add this line of code at the top of the callback function: e.preventDefault();.
button.addEventListener("click", function (e) {
    e.preventDefault();
// Inside the event handler function for the Guess button, empty the text of the message element.
    message.innerText = "";
// Create and name a variable to capture the value of the input. Log out the value of the variable capturing the input. Then, empty the value of the input. You should see the letter you enter into the input field in the console when the Guess button is clicked. 
const guessInputValue = letterInput.Value;
// console.log(guessInputValue);
letterInput.value = "";
// At the bottom of the event handler, call the function you made that checks the input, and pass it the input value as an argument. Save the result of this function call to a variable and log it out to the console.
const rightGuess = validateInput(guess);

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