let particle;


function setup(){
    createCanvas(600,450)
     background(0)
particle=new Particle()
}





//draw
function draw(){
  
   
    if(floor(particle.pos.y)<=450){console.log(floor(particle.pos.y));}
    
    //show the particles
    particle.show()

    //move the particle to up
    particle.update()
    //

if(random(1)<0.01){
    console.log("r");
}

}



