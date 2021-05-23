//array of the particles
let particle=[];

function setup(){
    // createCanvs(window.innerWidth,window.innerHeight)
    createCanvas(600,400)
    //loop for the particle
    for(i=0;i<=550;i++){
        particle[i]=new Particle()
    }
    
}

//draw function
function draw(){
    background(51,90)
    for(i=0;i<particle.length;i++){
         particle[i].show()
         particle[i].move()
         particle[i].edge()
}
    
}


//class for the particles
class Particle{
    constructor(){
      this.x=random(width);
      this.y=random(height);
      this.d=10;
    }
   //show function for the particles
   show(){
       noStroke()
       fill(255,0,0,)
       circle(this.x,this.y,this.d)
   }
   
  //speed variable
    speedofX=random(4)
    speedofY=random(2)
   //movement for particles
   move(){
       this.x+=this.speedofX
       this.y+=this.speedofY
   }

   //dectect edges
   edge(){
       if(this.x>width ||this.x<0){
        //    console.log("edge");
        this.speedofX=this.speedofX*-1
       }
       else if(this.y>height || this.y<0){
            this.speedofY=this.speedofY*-1
    }
      
   }
}