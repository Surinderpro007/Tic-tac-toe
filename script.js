const boxes = document.querySelectorAll(".box")
const resetBtn = document.getElementById("reset-btn")
let newGame = document.getElementById("new-game");
let msg = document.getElementById("msg");
let msgContainer = document.querySelector(".msg-container")

let turn0 = true
const winPattrens =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide")
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("btn bcx clikred")
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }

        box.disabled = true

        checkWinner()
    })
})


const disablebox = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner=(Winner)=>{
    msg.innerHTML= `Congo , Winner is ${Winner}`;
    msgContainer.classList.remove("hide")
    disablebox()
}

const checkWinner=()=>{
    for(pattren of winPattrens){
        // console.log(pattren[0],pattren[1],pattren[2])
        // console.log(boxes[pattren[0]].innerText,boxes[pattren[1]].innerText,boxes[pattren[2]].innerText)
      let pos1val =  boxes[pattren[0]].innerText
      let pos2val =  boxes[pattren[1]].innerText
      let pos3val =  boxes[pattren[2]].innerText

      if(pos1val != "" && pos2val !="" && pos3val !=""){

          if(pos1val === pos2val && pos2val === pos3val){
              console.log("Winner",pos1val)
              showWinner(pos1val)
            }
        } 
    }
}

newGame.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)
