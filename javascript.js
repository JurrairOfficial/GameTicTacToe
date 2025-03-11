let box = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#resset");

let turnO = true;

let winpattern = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];

box.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was CLicked")
        if(turnO === true) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
    });
});

