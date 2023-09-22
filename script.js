<script>
        const choices = ["rock", "paper", "scissors"];

        function computerChoice() {
            const randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }

        function determineWinner(playerChoice, computerChoice) {
            if (playerChoice === computerChoice) {
                return "It's a tie!";
            } else if (
                (playerChoice === "rock" && computerChoice === "scissors") ||
                (playerChoice === "paper" && computerChoice === "rock") ||
                (playerChoice === "scissors" && computerChoice === "paper")
            ) {
                return "You win!";
            } else {
                return "Computer wins!";
            }
        }

        function playGame(playerChoice) {
            const computer = computerChoice();
            const result = determineWinner(playerChoice, computer);
            document.getElementById("result").innerHTML = `You chose ${playerChoice}, computer chose ${computer}. ${result}`;
        }

        document.getElementById("rock").addEventListener("click", () => playGame("rock"));
        document.getElementById("paper").addEventListener("click", () => playGame("paper"));
        document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
    </script>