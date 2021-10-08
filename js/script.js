// Create global variables

const guessedLetters = document.querySelector(".guessed-letters"); // Unordered list where the player’s guessed letters will appear.
const button = document.querySelector(".guess"); // The button with the text “Guess!” in it. 
const letterInput = document.querySelector(".letter"); // The text input where the player will guess a letter.
const wordInProgress = document.querySelector(".word-in-progress"); // The empty paragraph where the word in progress will appear.
const remainingGuesses = document.querySelector(".remaining"); // The paragraph where the remaining guesses will display.
const spanRemainingGuesses = document.querySelector (".remaining span"); // Span inside the paragraph where the remaining guesses will display.
const playerGuessedLetter = document.querySelector (".message"); // Empty paragraph where messages will appear when the player guesses a letter.
const hiddenButton = document.querySelector (".play-again"); // The hidden button that will appear prompting the player to play again.

// Create another global variable called word and give it the value of "magnolia". Magnolia is your starting word to test out the game until you fetch words from a hosted file in a later step.
const word = "magnolia";

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

// Create and name a variable to capture the value of the input. Log out the value of the variable capturing the input. Then, empty the value of the input. You should see the letter you enter into the input field in the console when the Guess button is clicked. 
const guessInputValue = letterInput.Value;
console.log(guessInputValue);
letterInput.value = "";

});