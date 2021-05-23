class Paddle{
    constructor(r,g,b){
        let xPos=random(width-100) 
        let yPos=height

        //position vector for the paddles
        this.pos=createVector(xPos,yPos)
        
        //velcity vector for the paddles
        this.vel=createVector(0,-2)
        
        ///color variables 
        this.r=r   
        this.g=g   
        this.b=b  
    }

    //update the position vector according to velocity vector
        update(){
        
        this.pos.add(this.vel)

         }
   
   
         show(){
         
        fill(this.r,this.g,this.b)
         rect(this.pos.x,this.pos.y,100,30)
   }


   



}