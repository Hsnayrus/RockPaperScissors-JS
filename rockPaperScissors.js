const prompt = require("prompt-sync")({ sigint: true });

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  switch (userInput) {
    case "rock":
      return userInput;
    case "paper":
      return userInput;
    case "scissors":
      return userInput;
    default:
      console.log("Invalid choice entered");
      return getUserInput();
  }
};

const getUserInput = () => {
  getUserChoice(prompt("Please enter your choice: "));
};

const showGameInstructions = () => {
  console.log("You can choose among,");
  console.log("Rock");
  console.log("Paper");
  console.log("Scissors");
};

const playGame = () => {
  showGameInstructions();
  getUserInput();
};

playGame();
