let player = "O";
let gameActive = true;
let jsconfetti = new JSConfetti();

// Load sounds
let moveSound = document.getElementById("moveSound");
let winSound = document.getElementById("winSound");

function playerClick(cellid) {
    let cell = document.getElementById(cellid);

    // If cell already clicked or game ended → show alert
    if (cell.innerHTML !== "" || !gameActive) {
        alert("Double click not allowed!");
        return;
    }

    // Place the mark and play move sound
    cell.innerHTML = player;
    moveSound.currentTime = 0;
    moveSound.play();

    // Check winner
    checkWinner();

    // If game still active, switch player
    if (gameActive) {
        player = player === "O" ? "X" : "O";
        document.getElementById("turn").innerHTML = player + "'s turn";
    }
}

function checkWinner() {
    let cells = [];
    for (let i = 1; i <= 9; i++) {
        cells[i] = document.getElementById("cell" + i).innerHTML;
    }

    let winPatterns = [
        [1,2,3], [4,5,6], [7,8,9],
        [1,4,7], [2,5,8], [3,6,9],
        [1,5,9], [3,5,7]
    ];

    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (cells[a] && cells[a] === cells[b] && cells[b] === cells[c]) {
            document.getElementById("result").innerHTML = player + " is the Winner 🎉";

            // Highlight winning cells
            pattern.forEach(index => {
                document.getElementById("cell" + index).classList.add("winner");
            });

            // Play win sound
            winSound.currentTime = 0;
            winSound.play();

            // Add confetti
            jsconfetti.addConfetti();

            gameActive = false;
            return;
        }
    }

    // Draw check
    if ([...Array(10).keys()].slice(1).every(i => cells[i] !== "")) {
        document.getElementById("result").innerHTML = "It's a Draw!";
        gameActive = false;
    }
}

function restart() {
    // Clear board
    for (let i = 1; i <= 9; i++) {
        let cell = document.getElementById("cell" + i);
        cell.innerHTML = "";
        cell.classList.remove("winner");
    }
    gameActive = true;
    player = "O";
    document.getElementById("turn").innerHTML = "O's turn";
    document.getElementById("result").innerHTML = "";
}
