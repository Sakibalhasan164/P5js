class Player{
    constructor(){
        this.pos=createVector(20,280)
               

        this.gravity=createVector(0,.5)
         this.vel=createVector(0,0)
    }

  
   jump(force){
           this.vel.add(force) 
           this.vel.limit(5)

   }

///update function
    update(){
        // this.pos=constrain (this.pos.y,400,0)
        this.pos.add(this.vel)
        this.vel.add(this.gravity)
        
        if(this.pos.y>height-100){
            this.pos.y=height-100
        }
        // this.pos.constrain(height)
    }

 
    show(){
        rect(this.pos.x,this.pos.y,50,100)
    }
    

}