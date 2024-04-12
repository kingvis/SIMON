// let gameSeq=[];
// let userSeq=[];
// let btns=["red","yellow","blue","green"];

// let started = false;
// let level=0;

// let h2=document.querySelector("h2");
// document.addEventListener("keydown",function(){
//     if(started==false){
//     console.log("game is started");
//     started=true;

//     levelUp();
//     }
// });


// function gameFlash(btn){
//     if(btn) {
//         btn.classList.add("flash");
//     setTimeout(function()  {
//         btn.classList.remove("flash");
        
//     }, 250);
//      }
    
// }
// function userFlash(btn){
//     btn.classList.add("userFlash");
//     setTimeout(function()  {
//         btn.classList.remove("userFlash");
        
//     }, 250);
// }
// function levelUp(){
//     userSeq=[];
//     level++;
//     h2.innerText = `Level ${level}`;

//     let randIdx=Math.floor(Math.random()* 3);
//     let randColor=btns[randIdx];
//     let randBtn=document.querySelector(`.${randColor}`);
//     // console.log(randBtn);
//     // console.log(randColor);
//     // console.log(randIdx);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }

// function checkAns(idx) {
//      idx=level-1;
//     if (userSeq[idx]===gameSeq[idx]){
//         if(userSeq.length==gameSeq.length){
//             setTimeout(levelUp,1000);
//         }
//     }else{
//         h2.innerHTML = `GAME OVER,  Your score was <b>${level}</b> <br>press any key to start`;
//         document.querySelector("body").style.backgroundColor="red";
//         setTimeout(function(){
//             document.querySelector("body").style.backgroundColor=" ";

//         },150);
//         reset();
//     }

    
// }
// function btnpress(){ 
    
//     let btn=this;
//     userFlash(btn);

    
// userColor= btn.getAttribute("id");
// userSeq.push(userColor);

// checkAns(userSeq.length-1);
// }



// let allBtns= document.querySelectorAll(".btn");
// allBtns.forEach(function (btn) {
//     btns.addEventListener("click",btnpress);
// }

// function reset(){
//     started=false;
//     gameSeq= [];
//     userSeq= [];
//     level=0;
// }


let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keydown", function () {
    if (!started) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});


function gameFlash(btn) {
    if (btn) {
        btn.classList.add("flash");
        setTimeout(function () {
            btn.classList.remove("flash");

        }, 250);
    }

}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");

    }, 250);
}
// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     setTimeout(() => {
//         for (let i = 0; i < level; i++) {
//             setTimeout(() => {
//                 let color = gameSeq[i];
//                 let btn = document.querySelector(`.${color}`);
//                 gameFlash(btn);
//             }, 500 * i); // Flash each color with a delay
//         }
//     }, 1000); // Delay before flashing previous colors


//     let randIdx = Math.floor(Math.random() * 4);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }
// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     // Flash colors from all previous levels
//     setTimeout(() => {
//         for (let i = 0; i < level - 1; i++) { // Flash all colors except the newly added one
//             setTimeout(() => {
//                 let color = gameSeq[i];
//                 let btn = document.querySelector(`.${color}`);
//                 gameFlash(btn);
//             }, 500 * i); // Flash each color with a delay
//         }

//         // After flashing all previous colors, flash the new color
//         setTimeout(() => {
//             let randIdx = Math.floor(Math.random() * 4);
//             let randColor = btns[randIdx];
//             gameSeq.push(randColor);
//             console.log(gameSeq);
//             let randBtn = document.querySelector(`.${randColor}`);
//             gameFlash(randBtn);
//         }, 500 * (level - 1)); // Delay before flashing the new color
//     }, 1000); // Delay before flashing previous colors
// }
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // Flash colors from all previous levels
    setTimeout(() => {
        for (let i = 0; i < level - 1; i++) {
            setTimeout(() => {
                let color = gameSeq[i];
                let btn = document.querySelector(`.${color}`);
                gameFlash(btn);
            }, 500 * i);
        }

        setTimeout(() => {
            let randIdx = Math.floor(Math.random() * 4);
            let randColor = btns[randIdx];
            gameSeq.push(randColor);
            console.log(gameSeq);
            let randBtn = document.querySelector(`.${randColor}`);
            gameFlash(randBtn);
        }, 500 * (level - 1));
    }, 1000);

    // Check if the user passed the level
    if (level > 1 && level % 3 === 0) {
        // Add celebration animation to the body element
        document.body.classList.add("celebrationAnimation");

        // Remove celebration animation after a short delay
        setTimeout(() => {
            document.body.classList.remove("celebrationAnimation");
        }, 3000); // Duration of the celebration animation (3 seconds)
    }
}



function checkAns() {
    let idx = userSeq.length - 1;
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `GAME OVER,  Your score was <b>${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "";
        }, 150);
        reset();
    }
}
function btnpress() {
    let btn = this;
    btn.classList.add("btnClickAnimation"); // Add the animation class
    userFlash(btn); // Flash user button
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();

    // Remove the animation class after a short delay
    setTimeout(() => {
        btn.classList.remove("btnClickAnimation");
    }, 100);
}

let allBtns = document.querySelectorAll(".btn");
allBtns.forEach(function (btn) {
    btn.addEventListener("click", btnpress);
});

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
