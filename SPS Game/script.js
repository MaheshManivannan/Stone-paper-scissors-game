let playGame = confirm("Shall we play stone, paper, or scissors?");

    if (playGame) {
      // Play
      let playerChoice = prompt("Please enter stone, paper, or scissors.");

      if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();

        if (playerOne === "stone" || playerOne === "paper" || playerOne === "scissors") {
          let computerChoice = Math.floor(Math.random() * 3) + 1;
          let computer;

          if (computerChoice === 1) {
            computer = "stone";
          } else if (computerChoice === 2) {
            computer = "paper";
          } else {
            computer = "scissors";
          }

          if (playerOne === computer) {
            alert("Tie game!");
          } else if (
            (playerOne === "stone" && computer === "paper") ||
            (playerOne === "paper" && computer === "scissors") ||
            (playerOne === "scissors" && computer === "stone")
          ) {
            alert(`playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`);
          } else {
            alert(`playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`);
          }

          let playAgain = confirm("Play Again?");
          if (playAgain) {
            location.reload();
          } else {
            alert("Ok, thanks for playing.");
          }
        } else {
          alert("You didn't enter stone, paper, or scissors.");
        }
      } else {
        alert("I guess you changed your mind. Maybe next time.");
      }
    } else {
      alert("Ok, maybe next time.");
    }