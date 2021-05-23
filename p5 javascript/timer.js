//variables
let posX=230
let collenX=270
let seconds=0
let mins=0
let mytimer;
//button
let startTheTimer;//the button to start the timer 
let resetTheTimer;//the button to reset the timer back to zero

function setup(){
    startBtn()
    createCanvas(600,400)
    resetBtn()//caling the restBtn function
     

    myTimer= startTheTimer.mousePressed(()=>{
        setInterval(incCOunter,1000) 
    })

     //the callback after clicking the reset button
     resetTheTimer.mousePressed(()=>{
           clearInterval(myTimer)
          mins=0
         seconds=0
    console.log("0");
     })

}

//draw function
function draw(){
    background(255)
    //the conter
    textSize(55)
    fill(237,34,93)
    text(mins+" ",posX,200)
    text(":",collenX,197)
    text( seconds,width/2,height/2)
    // changePos() 
    if(changePos()){
        // console.log(posX);
     //   noLoop()
     posX-=.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
   if(posX>=187){
   posX=188
//   console.log("its");
  }
// collenX-=.5

     }
     else{
        loop()
     }
}

function incCOunter(){
    seconds++
    if(seconds==60){
        // console.log("j");
        seconds=0
        mins++
    }
}

function startBtn(){
    startTheTimer =createButton('Start');

}
// let button=document.querySelector("")
function resetBtn(){
   resetTheTimer=createButton("Reset")
   resetTheTimer.position(350,262)
   resetTheTimer.style('font-size', '16px')
   resetTheTimer.style("height","40px")
}

function changePos(){
    if(mins>=10){
               return true
    }else{return false}
}

