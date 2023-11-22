let timer = 60;
let score = 0
let hit;
function increaseScore(){
    score += 10
    document.querySelector("#newScore").textContent = score
}
function newHit(){
    hit = Math.floor(Math.random()*10)
    document.querySelector("#newHit").textContent = hit 
}
function makeBubbles(){
    let bubbles = ''
    for (let i = 1; i <=189;i++){
    let rn = Math.floor(Math.random()*10)
    bubbles += `<div class="bubble">${rn}</div>`
    }
    document.querySelector(".panel-bottom").innerHTML = bubbles
}

function runTimer(){
    let timerr = setInterval(()=>{
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer
        } else {
            clearInterval(timerr)
            parent.innerHTML = "GameOver"
        }
    },1000)
   
}

let parent = document.querySelector(".panel-bottom")
parent.addEventListener("click", (dets)=>{
    let clickednum = Number(dets.target.textContent)
    if(clickednum === hit){
        increaseScore()
        makeBubbles()
        newHit()
    }
})
makeBubbles();  
runTimer();
newHit();
