// let box = document.querySelectorAll(".box");
// let resetbutton = document.querySelector("#resset");
// let msg = document.querySelector(".msg-container");
// let winner = document.querySelector("#msg");

// let turnO = true;

// let winpattern = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ];

// box.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("button was CLicked")
//         if(turnO === true) {
//             box.innerText = "O";
//             turnO = false;
//         }
//         else {
//             box.innerText = "X";
//             turnO = true;
//         }
//         box.disabled = true;
//         checkwinner();
//     });
// });

//     const showwinner = (winner) => {
//      msg.innerText = 'congratulat ions, winner is  ' + winner;
//      msgContainer.classList.remove("hide");


// }

// const checkwinner = () => {
//     for(let pattern of winpattern) {
        
//         let p1 =    box[pattern[0]].innerText;
//         let p2 =    box[pattern[1]].innerText;
//         let p3 =    box[pattern[2]].innerText;

//         if(p1 != "" && p2 != "" && p3 != "") {
//             if(p1 === p2 && p2 === p3) {
//                 console.log("winner", p1);
//                 showwinner(p1);
//             }
//         }
        
        
//     }
// };

let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // Rows
    [0,3,6], [1,4,7], [2,5,8], // Columns
    [0,4,8], [2,4,6]           // Diagonals
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        box.disabled = true;
        turnO = !turnO;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msg.style.fontSize = "2rem"; // Adjust size dynamically
    msg.style.fontWeight = "bold";
    msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if (p1 !== "" && p1 === p2 && p2 === p3) {
            console.log("Winner:", p1);
            showWinner(p1);
            disableBoxes();
            return;
        }
    }
};

const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

resetButton.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
    turnO = true;
});

