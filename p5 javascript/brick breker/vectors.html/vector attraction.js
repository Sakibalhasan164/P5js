let ball;


function setup(){
    createCanvas(600,600)  


    ball=new Ball()
}


    
function draw(){
    background(0);
    //show for the ball
    ball.show()
    //update 
    ball.update()

    //applt force
    let mouse=createVector(mouseX,mouseY)
    ball.applyForce(mouse)

}