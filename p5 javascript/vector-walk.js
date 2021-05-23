// let kata;


// function setup(){

//     createCanvas(400,400);
   
//     kata=new Kata()
//     console.log(mouseX, mouseY);
// }

// function draw(){
    
//     background(0)
//     translate(width / 2, height / 2);
//     kata.show()
     

    
     
    
// }

let mover
function setup(){
    createCanvas(600,400)
    mover=new Mover(200,200)
    
}
function draw(){
    background(0)
    mover.update()
    mover.show()
}