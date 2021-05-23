let kata;


function setup(){
    createCanvas(600,600)
    kata=new Kata()
    
}



function draw(){
    background(0);
    translate(width/2,height/2)
    
       let mouse=createVector(mouseX,mouseY)

    kata.show(mouse)
    //  kata.update()
    
    
    
   
    
}