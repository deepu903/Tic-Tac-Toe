let boxes = document.querySelectorAll(".cell-btn");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // O starts first
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const newGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        enableBtn();
    });
    msgContainer.classList.add("hide");
    turnO = true; // Reset the turn to O
}

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        enableBtn();
    });
    msgContainer.classList.add("hide");
    turnO = true;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBtn = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};
const enableBtn = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    });
};

const showWinner = (winner) => {
    msg.innerText = `${winner} is the winner!`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner");
                disableBtn();
                showWinner(pos1Val);
            }
        };
    };
};


newBtn.addEventListener("click",newGame);

resetBtn.addEventListener("click",resetGame)