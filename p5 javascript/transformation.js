let r=0


function setup(){
    createCanvas(600,400)
    angleMode(DEGREES)
    
}

function draw(){    

    background(51)
    //a vector

    
    push()
    
    
    let pos=createVector(0,0)
    

    translate(200,200)
    r+=1
    rotate(r)
    stroke(255)
    // line(0,0,50,50)
    scale(mouseX /100)
    rectMode(CENTER)
    rect(pos.x,pos.y,100,50)
    pop()
    
    
    ///another rect
    // rotate(r)
    // rect(100,100,50,60)

}