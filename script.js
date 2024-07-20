let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnX = true;
const winPat = [[0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]]; 

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX === true) {
            box.classList.add("set-color1");
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.classList.add("set-color2");
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = ()=>{
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

let count = 0;

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
    for(let pat of winPat){
        let pos1 = boxes[pat[0]].innerText;
        let pos2 = boxes[pat[1]].innerText;
        let pos3 = boxes[pat[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            count = 1;
            if(pos1 === pos2 && pos2 === pos3){
                count = 0;
                showWinner(pos1);
            }
        }
    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);