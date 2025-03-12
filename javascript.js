let box = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#resset");
let msg = document.querySelector("msg-winner");
let winner = document.querySelector(".winner");

let turnO = true;

let winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
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
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for(let pattern of winpattern) {
        
        let p1 =    box[pattern[0]].innerText;
        let p2 =    box[pattern[1]].innerText;
        let p3 =    box[pattern[2]].innerText;

        if(p1 != "" && p2 != "" && p3 != "") {
            if(p1 === p2 && p2 === p3) {
                console.log("winner", p1);
            }
        }
        
        
    }
};

